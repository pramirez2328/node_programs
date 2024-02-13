function Nav() {
  return (
    <div className='mt-4'>
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid flex-column flex-sm-row'>
          <a className='navbar-brand title-nav '>Students</a>
          <form className='d-flex  col-8 col-md-5 col-xl-3' role='search'>
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
