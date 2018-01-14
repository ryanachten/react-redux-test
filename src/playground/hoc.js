import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>Warning! Sensitive info</p> }
      <WrappedComponent {...props}/>
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);


const requireAuthentication = (WrappedComponent) => {

  return (props) => (
    <div>
      { props.isAuthenticated ? (
        <WrappedComponent {...props}/>
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="testing" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="testing" />, document.getElementById('app'));
