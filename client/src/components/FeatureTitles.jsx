import { useEffect, useState } from "react";
import axios from "axios";

function FeatureTitles() {
  const [titles, setTitles] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(titles);

  const getTitles = async () => {
    const response = await axios.get(
      `http://localhost:4001/trips?keywords=${searchText}`
    );
    // console.log(response.data.data);
    setTitles(response.data.data);
  };

  useEffect(() => {
    getTitles();
  }, [searchText]);

  return (
    <div className="space-y-8">
      {titles.map((item) => {
        return (
          <div
            key={item.eid}
            class="bg-white rounded-lg shadow-lg overflow-hidden flex mb-6 gap-4"
          >
            <img
              class="w-1/3 object-cover "
              src={item.photos[0]}
              alt="Main Image"
            />
            <div class="w-2/3 p-4">
              <h2 class="text-2xl font-bold mb-2">{item.titles}</h2>
              <p class="text-gray-700 mb-4">{item.description}</p>
              <a href="#" class="text-blue-500 underline mb-4 inline-block">
                อ่านต่อ
              </a>
              <div class="mt-4 text-sm text-gray-500">
                <span class="mr-2">หมวด</span>
                <a href="#" class="text-blue-500 underline mr-2">
                  เกาะ
                </a>
                <a href="#" class="text-blue-500 underline mr-2">
                  ทะเล
                </a>
                <a href="#" class="text-blue-500 underline mr-2">
                  จุดชมวิว
                </a>
                <a href="#" class="text-blue-500 underline mr-2">
                  ธรรมชาติ
                </a>
                <a href="#" class="text-blue-500 underline">
                  ตลาด
                </a>
              </div>
              <div class="flex space-x-4">
                {item.photos.slice(1).map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    className="w-1/4 rounded-lg"
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeatureTitles;
