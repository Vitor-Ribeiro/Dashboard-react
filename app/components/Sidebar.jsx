
import React, { useState } from 'react';
import Colapse from './Colapse'
import { Link, useLocation } from "@remix-run/react";

export default function Sidebar() {
  const location = useLocation();

  const isAnalyticsPage = location.pathname === '/index';
  const isCalendarPage = location.pathname === '/calendar';
  const isProfilePage = location.pathname === '/profile';
  const isFormElementsPage = location.pathname === '/formElements';
  const isFormLayoutPage = location.pathname === '/formLayout';
  const isTablesPage = location.pathname === '/table';
  const isSettingsPage = location.pathname === '/settings';
  const isMessagesPage = location.pathname === '/messages';
  const isInboxPage = location.pathname === '/inbox';
  const isInvoicePage = location.pathname === '/invoice';
  const isAlertsPage = location.pathname === '/alearts';
  const isButtonsPage = location.pathname === '/buttons';
  const isSignInPage = location.pathname === '/signIn';
  const isSignUpPage = location.pathname === '/signUp';
  const isResetPasswordPage = location.pathname === '/resetPassword';





  const dashboardIcon = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-6h-8v6zm0-8h8v-6h-8v6z" />
        </svg>
    `;
  const taskIcon = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFFFFF">
            <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm4-4H7v-2h9v2zm0-4H7V7h9v2z"/>
        </svg>
    `;
  const formsIcon = `
        <svg viewBox="0 0 20 24" width="20" height="20" fill="#FFFFFF">
            <path d="M3 2h14a2 2 0 012 2v16a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h14V4H3zm4 2h2v2H7V6zm0 4h2v2H7v-2zm0 4h2v2H7v-2zm4-8h6v2h-6V6zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z"/>
        </svg>
`;
  const pagesIcon = `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
        </svg>
`;
  const uiElementsIcon = `
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="3" width="6" height="4" rx="1" stroke="white" stroke-width="2"/>
    <rect x="15" y="3" width="6" height="4" rx="1" stroke="white" stroke-width="2"/>
    <rect x="3" y="13" width="6" height="4" rx="1" stroke="white" stroke-width="2"/>
    <rect x="15" y="13" width="6" height="4" rx="1" stroke="white" stroke-width="2"/>
  </svg>
`;
  const authenticationIcon = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="login-icon"
  >
    {/* Ícone da "porta" */}
    <rect x="3" y="3" width="8" height="18" rx="2" ry="2" />
    
    {/* Seta apontando para a direita */}
    <path d="M13 16l4-4-4-4" />
    <line x1="17" y1="12" x2="8" y2="12" />
  </svg>
  `;
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">


      <ul className="no-scrollbar flex-1 space-y-1 p-4 overflow-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
        <div className="py-6 pb-7 font-bold text-2xl text-center flex items-center justify-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" rx="6" fill="#3B5CCC" />
            <line x1="8" y1="14" x2="8" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="16" x2="12" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="12" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>TailAdmin</span>
        </div>
        <div className="space-y-1 p-0">
          <p className="text-sm text-gray-400">MENU</p>
          <Colapse text="Dashboard"
            iconText={dashboardIcon}
            toggleIcon
            activePaths={['/index']}>
            <ul className="mt-2 space-y-1">
              <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                <span>eCommerce</span>
                <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
              </li>
              <li
                className={`flex justify-between items-center px-8 py-2 text-sm rounded-md ${isAnalyticsPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}
              >
                <span className="flex-1">
                  <Link to="/index">Analytics</Link>
                </span>
              </li>
              <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                <span>Marketing</span>
                <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
              </li>
              <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                <span>CRM</span>
                <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
              </li>
            </ul>
          </Colapse>
        </div>

        <li className={`p-2 flex items-center space-x-3 rounded-md ${isCalendarPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFFFFF">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-1.99.9-1.99 2L3 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13zM7 10h5v5H7v-5zm6 0h4v5h-4v-5z" />
          </svg>
          <span className="text-white"><Link to="/calendar">Calendar</Link></span>
        </li>

        <li className={`p-2 flex items-center space-x-3 rounded-md ${isProfilePage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#FFFFFF">
            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-white"><Link to="/profile">Profile</Link></span>
        </li>

        <Colapse text="Task"
          iconText={taskIcon}
          toggleIcon>
          <ul className="mt-2 space-y-1">
            <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              <span>List</span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
            <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              <span>Kanban</span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
          </ul>
        </Colapse>



        <Colapse text="Forms"
          iconText={formsIcon}
          toggleIcon
          activePaths={['/formElements', '/formLayout']}>
          <ul className="mt-2 space-y-1">
            <li className={`flex justify-between items-center px-8 py-2 text-sm rounded-md ${isFormElementsPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
              <span><Link to="/formElements">FormElements</Link></span>
            </li>
            <li className={`flex justify-between items-center px-8 py-2 text-sm rounded-md ${isFormLayoutPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
              <span><Link to="/formLayout">FormLayout</Link></span>
            </li>
            <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              <span>FormValidation</span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
          </ul>
        </Colapse>

        <li className={`p-2 flex items-center space-x-3 rounded-md ${isTablesPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
            <line x1="15" y1="21" x2="15" y2="9" />
          </svg>
          <span className="text-white"><Link to="/table">Tables</Link></span>
        </li>

        <Colapse text="Pages"
          iconText={pagesIcon}
          toggleIcon
          activePaths={['/settings']}>
          <ul className="mt-2 space-y-1">
            <li className={`flex justify-between items-center px-8 py-2 text-sm rounded-md ${isSettingsPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
              <Link to="/settings">Settings</Link>
            </li>
            <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              <span>FileManager</span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
            <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              <span>DataTables</span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
            <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              <span>Pricing Tables</span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
            <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              <span>Error Page</span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
            <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
              <span>Mail Success</span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
          </ul>
        </Colapse>




        <div className="space-y-1 p-0">
          <p className="text-sm text-gray-400">SUPPORT</p>
          <ul className="space-y-1 mt-2">
            <li className={`p-2 flex items-center space-x-3 rounded-md ${isMessagesPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <path d="M22 6L12 13 2 6" />
              </svg>
              <span className="text-white"><Link to="/messages">Messages</Link></span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">5</span>
            </li>
            <li className={`p-2 flex items-center space-x-3 rounded-md ${isInboxPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="text-white"><Link to="/inbox">Inbox</Link></span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
            <li className={`p-2 flex items-center space-x-3 rounded-md ${isInvoicePage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="3" width="16" height="18" rx="2" ry="2" />
                <line x1="8" y1="7" x2="16" y2="7" />
                <line x1="8" y1="11" x2="16" y2="11" />
                <line x1="8" y1="15" x2="16" y2="15" />
              </svg>
              <span className="text-white"><Link to="/invoice">Invoice</Link></span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
          </ul>
        </div>

        <div className="space-y-1 p-0">
          <p className="text-sm text-gray-400">OTHERS</p>
          <ul className="space-y-1 mt-2">
            <li className="p-2 flex items-center space-x-3 hover:bg-gray-700 rounded-md">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2.08325V11.0001H21.9167C21.2417 6.1575 17.8425 2.75825 13 2.08325ZM12 12.0001V2.00008C6.47783 2.00008 2.00012 6.47779 2.00012 12.0001C2.00012 17.5223 6.47783 22.0001 12 22.0001C17.5223 22.0001 22.0001 17.5223 22.0001 12.0001H12Z"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <span >Chart</span>

            </li>
            <Colapse text="Ui Elements"
              iconText={uiElementsIcon}
              toggleIcon
              activePaths={['/alearts', '/buttons']}>
              <ul className="mt-2 space-y-1">
                <li className={`flex justify-between items-center px-8 py-2 text-sm rounded-md ${isAlertsPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
                  <span><Link to="/alearts">Alerts</Link></span>
                </li>
                <li className={`flex justify-between items-center px-8 py-2 text-sm rounded-md ${isButtonsPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
                  <span><Link to="/buttons">Buttons</Link></span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Buttons Group</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Badge</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Breadcrumb</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Cards</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Dropdowns</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Modals</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Tabs</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Tooltips</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Popovers</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Accordion</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Notifications</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Pagination</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Progress</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Carousel</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Images</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
                <li className="flex justify-between items-center px-8 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                  <span>Videos</span>
                  <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
                </li>
              </ul>
            </Colapse>
          </ul>
        </div>
        <Colapse text="Authentication"
          iconText={authenticationIcon}
          toggleIcon
          activePaths={['/signIn', '/signUp', '/resetPassword']}>
          <ul className="mt-2 space-y-1">
            <li className={`flex justify-between items-center px-8 py-2 text-sm rounded-md ${isSignInPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
              <span><Link to="/signIn">SignIn</Link></span>
            </li>
            <li className={`flex justify-between items-center px-8 py-2 text-sm rounded-md ${isSignUpPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
              <span><Link to="/signUp">SignUp</Link></span>

            </li>
            <li className={`flex justify-between items-center px-8 py-2 text-sm rounded-md ${isResetPasswordPage ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
              <span><Link to="/resetPassword">Reset Password</Link></span>
              <span className="bg-blue-500 text-xs rounded px-2 py-1">Pro</span>
            </li>
          </ul>
        </Colapse>

      </ul>


    </div>
  );
}
