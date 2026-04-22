import UserDetails from "./UserDetails.jsx";
//import AuthForm from "./AuthForm.jsx";

const BUILD_TIME = new Date().toLocaleString();

function App() {

    return(
      <>
        <div style={{
          backgroundColor: '#10b981',
          color: 'white',
          padding: '12px 16px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: '500',
          borderBottom: '2px solid #059669'
        }}>
          ✓ Deployment Successful — Built: {BUILD_TIME}
        </div>
        <UserDetails />
      </>
    );
  
}

export default App