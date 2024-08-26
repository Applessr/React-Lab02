function App() {

    const st1 = { 
        color: 'white', 
        height: '100vh',
        backgroundColor: '#23272F', 
        padding:'3rem',
        display: 'flex' ,
        flexDirection: 'column',
        alingItem: 'center',
        fontFamily: 'Optimistic Display,-apple-system,ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'
    }
    const st2 = {
        backgroundColor: '#343A46',
        minWidth: '80%',
        borderRadius: '10px',
        padding: '2rem',
        paddingLeft: '3rem' 
    }
    return (
        <div style={st1}>
          <h1 style={{padding: '1rem'}}>Quick Start</h1>
          <h3 style={{padding: '1rem',  fontWeight: '200'}}>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</h3>
          <div style={st2}>
            <ul> <h3 style={{padding: '5px',fontSize:'24px'}}>You will learn</h3>
                <li style={{padding: '5px'}}>How to create and nest components</li>
                <li style={{padding: '5px'}}>How to add markup and styles</li>
                <li style={{padding: '5px'}}>How to display data</li>
                <li style={{padding: '5px'}}>How to render conditions and lists</li>
                <li style={{padding: '5px'}}>How to respond to events and update the screen</li>
                <li style={{padding: '5px'}}>How to share data between components</li>
            </ul>
          </div>
        </div>
    )
}
"2023-05-01T10:00:00.000Z"




ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)