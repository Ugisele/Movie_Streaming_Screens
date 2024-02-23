const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTJhZjJmZjIxZGI4OTg1NjU4MDU2YTBlN2I2YjU3MiIsInN1YiI6IjY1ZDg2YzI4MTQ5NTY1MDE3YmY2MDRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LAl2DLnebn0Nk4yh1Gh7kZhOsK4BdJlzeBoNHWcZhrE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/account/21026310/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));