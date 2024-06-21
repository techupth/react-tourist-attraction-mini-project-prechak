// import { useEffect, useState } from "react";
// import axios from "axios";

// function SearchBox() {
//   const [searchText, setSearchText] = useState("");
//   console.log(searchText);

//   const getDataFromServer = async () => {
//     const response = await axios.get(
//       `http://localhost:4001/trips?keywords=${searchText}`
//     );
//   };

//   useEffect(() => {
//     getDataFromServer();
//   }, [searchText]);

//   // return (
//   // <div className="flex justify-center mb-6">
//   //   <input
//   //     type="text"
//   //     className="w-9/12 border-b-2 focus:outline-none"
//   //     placeholder="หาที่เที่ยวแล้วไปกัน ..."
//   //     value={searchText}
//   //     onChange={(e) => {
//   //       setSearchText(e.target.value);
//   //     }}
//   //   />
//   // </div>
//   // );
// }

// export default SearchBox;
