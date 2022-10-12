import React from 'react';

function Blogs() {
    return (
      <div className="px-4 m-6 text-center">
        <div className="h-1/3 bg-gray-300 p-4">
          <h1 className="font-semibold text-3xl mb-2">
            What is the purpose of react router?
          </h1>
          <p>
            React Router is a standard library for routing in
            React. It enables the navigation among views of various components
            in a React Application, allows changing the browser URL, and keeps
            the UI in sync with the URL. Let us create a simple application to
            React to understand how the React Router works. The application will
            contain three components: home component, about a component, and
            contact component. We will use React Router to navigate between
            these components.
          </p>
        </div>
        <div className="h-1/3 bg-gray-300 my-6 p-4">
          <h1 className="font-semibold text-3xl mb-2">
            How does context api work?
          </h1>
          <p>
            As with most component-based frontend frameworks, passing some form
            of data from one component to another is usually a real need.
            Typically it comes in the form of passing data from a parent to a
            child component or even child to parent components. This leads to
            components having data they don’t actually need, but they need to
            pass on down the tree. This gets cumbersome pretty fast especially
            for certain types of props .
          </p>
        </div>
        <div className="h-1/3 bg-gray-300 p-4">
          <h1 className="font-semibold text-3xl mb-2">What is useref?</h1>
          <p>
            The useRef hook is the new addition in React 16.8. Before proceeding
            to this article there is a prerequisite to know about the ref in
            react. The useRef is a hook that allows to directly create a
            reference to the DOM element in the functional component.{" "}
          </p>
        </div>
      </div>
    );
}

export default Blogs;