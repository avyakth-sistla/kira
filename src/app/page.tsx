import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex p-4">
      {/* Sidebar on the left */}
      <Sidebar />
      
      {/* Main content area on the right with fully rounded corners */}
      <div className="flex-1 flex flex-col bg-gray-800 rounded-2xl ml-4">
        {/* Navbar at the top */}
        <Navbar />
        
        {/* Main content below the navbar */}
        <main className="p-4">
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          <h1>Welcome to Kira</h1>
          {/* Your main content here */}
        </main>
      </div>
    </div>
  );
};

export default Home;
