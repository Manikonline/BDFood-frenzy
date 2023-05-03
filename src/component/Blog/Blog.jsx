

import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h4 className='text-center py-10'>Here are some frequently asked question</h4>
            <div className='row '>
                <div className="card QNA-card  ">
                    <div className="card-body">
                        <h5 className="card-title text-success  ">1.What are Tell us the differences between uncontrolled and controlled components?</h5>
                        <p className='text-start card-descip '>A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.

                            An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.</p>

                    </div>
                </div>
                <div className="card QNA-card ">
                    <div className="card-body">
                        <h5 className="card-title text-success  ">2. How to validate React props using PropTypes?</h5>
                        <p className='text-start  card-descip' >Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.

                            Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components.
                            Here are some React PropTypes validators:any : The prop can be of any data type.
                            bool : The prop should be a Boolean.
                            number : The prop should be a number.
                            string : The prop should be a string.
                            func : The prop should be a function.
                            array : The prop should be an array.
                            object : The prop should be an object.
                            </p>

                    </div>
                </div>
                <div className="card QNA-card  ">
                    <div className="card-body">
                        <h5 className="card-title text-success  ">3. What are the difference between nodejs and express js?</h5>
                        <p className='text-start card-descip '>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications". </p>

                    </div>
                </div>
                <div className="card QNA-card mb-5">
                    <div className="card-body">
                        <h5 className="card-title text-success  ">4. What is a custom hook, and why will you create a custom hook?</h5>
                        <p className='text-start card-descip '>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;