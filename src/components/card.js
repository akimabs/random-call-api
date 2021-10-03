export default function Card({ data, children }) {
  return (
    <div className="mx-4 my-8 rounded-md p-4 bg-gray-10	 md:px-4">
      <a href={"https://github.com/" + data.username} target="blank">
        <div className="inline-flex items-center hover:bg-blue-100 p-2 rounded-md cursor-pointer">
          <img
            className="rounded-full h-8 w-8"
            src={data.avatar}
            alt="Contributor's avatar"
          />
          <h1 className="px-2 text-xl">{data.username}</h1>
        </div>
      </a>
      <a href={data.apiUrl} target="blank">
        <div className="inline-flex items-center hover:bg-blue-100 p-2 rounded-md cursor-pointer">
          <img
            className="rounded-full h-5 w-5"
            src="https://static.thenounproject.com/png/1429392-200.png"
            alt="Hyperlink icon"
          />
          <h1 className="px-2 text-l">{data.apiName}</h1>
        </div>
      </a>
      <h1 className="px-2 text-l">{data.apiDescription}</h1>
      {children}
    </div>
  );
}
