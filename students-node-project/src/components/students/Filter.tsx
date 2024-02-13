function Filter({
  handleFilter,
  courses,
}: {
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  courses: string[];
}) {
  return (
    <>
      <div className='input-group mb-3'>
        <label className='input-group-text' htmlFor='inputGroupSelect01'>
          Filter By:
        </label>
        <select className='form-select' id='inputGroupSelect01' onChange={handleFilter} value='Choose...'>
          <option defaultValue={'Choose...'}>Choose...</option>
          <option value='All Students'>All Students</option>
          <option value='Name'>Name</option>
          <option value='GPA'>GPA</option>
          <optgroup label='Courses:'>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
    </>
  );
}

export default Filter;
