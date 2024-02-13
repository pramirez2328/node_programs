function Nav() {
  return (
    <div>
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand text-muted'>Students</a>
          <form className='d-flex col-8 col-md-5 col-xl-3' role='search'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
