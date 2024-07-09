import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-primary">
          <FaExclamationTriangle className='text-yellow-500 text-6xl my-4 space-y-6' size={72} />
        </div>
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl">404</h1>
        <p className="mt-4 text-muted-foreground">Oops, the page you are looking for could not be found.</p>
        <div className="mt-6">
          <NavLink
            to="/"
            className="inline-flex items-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Go to Homepage
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
