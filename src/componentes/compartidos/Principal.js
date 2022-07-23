function Principal({ children }) {
    return (
      <>   
        <sidenav>
            <a href="/lista">lista</a>
            <a href="/crear">crear</a>
        </sidenav>
        <main>
            { children }
        </main>
      </>
    );
  }
  
  export default Principal;
  