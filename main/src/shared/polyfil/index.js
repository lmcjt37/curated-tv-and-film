(
  function IntersectionObserverPollyfil() {
    if(!window.IntersectionObserver) {
      import('intersection-observer')
        .then((module) => {
          console.info('=====> Intersection observer loaded ');
        })
        .catch(err => {
          console.error('Failed to load intersection observer', err);
        });
    }
  }
)();
