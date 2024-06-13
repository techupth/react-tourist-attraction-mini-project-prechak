import { useEffect, useState } from "react";
import axios from "axios";

function Homepage() {
  const [titles, setTitles] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(titles);
  // console.log(searchText);

  const getTitles = async () => {
    const response = await axios.get(
      `http://localhost:4001/trips?keywords=${searchText}`
    );
    // console.log(response.data.data);
    setTitles(response.data.data);
  };

  const handleTagClick = (tag) => {
    setSearchText((prevText) => {
      const tagExists = prevText.split(" ").includes(tag);
      console.log(tagExists);
      if (tagExists) {
        return prevText;
      }
      return prevText ? `${prevText} ${tag}` : tag;
    });
  };

  const handleCopyLink = async (url) => {
    await navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  useEffect(() => {
    getTitles();
  }, [searchText]);

  return (
    <div className="space-y-8">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          className="w-9/12 border-b-2 focus:outline-none"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      {titles.map((item, index) => {
        return (
          <div
            key={index}
            class="bg-white overflow-hidden flex mb-6 gap-4"
            style={{ fontFamily: "Kanit, sans-serif" }}
          >
            <img
              class="w-1/3 h-[17rem] object-cover rounded-lg "
              src={item.photos[0]}
              alt="Main Image"
            />
            <div class="w-2/3 p-4">
              <h2 class="text-2xl font-bold mb-2">
                <a href={item.url}>{item.title}</a>
              </h2>

              <p class="text-gray-700">
                {item.description.length > 100
                  ? item.description.substring(0, 100) + "..."
                  : item.description}
              </p>
              <a href={item.url} class="text-blue-500 underline  inline-block">
                อ่านต่อ
              </a>

              <div className="mb-8 text-sm text-gray-500">
                <span className="mr-2">หมวด</span>
                {item.tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-blue-500 underline mr-2"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </a>
                ))}
              </div>
              <div class="flex space-x-4">
                {item.photos.slice(1).map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    className="w-1/5 rounded-lg"
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))}
                <a
                  href="#"
                  className="self-end "
                  onClick={() => handleCopyLink(item.url)}
                >
                  <div
                    class="flex items-center justify-center w-16 h-16 border-2 border-blue-500 rounded-full hover:bg-gray-100"
                    style={{ marginLeft: "8rem" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8 text-blue-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;
