export const Navigation = ({ categories }) => {
    return (
        <div className='nav-panel'>
            <p className='bio hide-mobile'>
                Harper Daniel is a freelance digital designer and developer who values accessibility and general goodness. 
                <a href={process.env.PUBLIC_URL + '/pages/services.html'}>
                    Learn more about what she offers.
                </a>
            </p>
                <div className='button-wrap'>
                  <a href="services.html">About</a>
                  <a href="contact" className='hide-mobile'>Contact</a>
                  {categories.map((category) => (
                    <FilterButton
                      key={category}
                      category={category}
                      active={category === selectedCategory}
                      onClick={setSelectedCategory}
                    />
                  ))}
                </div>
        </div>
    );
};