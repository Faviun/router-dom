import AsignBlock from "./components/AsignBlock/AsignBlock";

function App() {
  const user = {
    photo: 'https://i.ytimg.com/vi/OGCO07Zcp-k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoACwAOKAgwIABABGGUgXyhDMA8=&rs=AOn4CLB3I4V5l1nxVVHIqF8vp37Xl8hpmw',
    first_name: 'Alice',
    last_name: 'Smith',
    role: 'Pet owner',
    isActive: true
  }
  return (
    <div className="flex">
      <AsignBlock user={user} />
    </div>
  );
}

export default App;
