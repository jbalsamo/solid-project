import { Component } from "solid-js";

const MenuBar: Component = () => {
  return (
    <header class='bg-white dark:bg-gray-900'>
      <div class='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div class='flex h-16 items-center justify-between'>
          <div class='md:flex md:items-center md:gap-12'>
            <a class='block text-teal-600 dark:text-teal-600' href='#'>
              <span class='sr-only'>Home</span>
              <div class='h-10 w-10'>
                <img src='rocket.svg' alt='Rocket logo' />
              </div>
            </a>
          </div>

          <div class='hidden md:block'>
            <nav aria-label='Global'>
              <ul class='flex items-center gap-6 text-sm'>
                <li>
                  <a
                    class='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                    href='#'
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    class='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                    href='#'
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    class='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                    href='#'
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    class='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                    href='#'
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    class='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                    href='#'
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    class='text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75'
                    href='#'
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div class='flex items-center gap-4'>
            <div class='sm:flex sm:gap-4'>
              <a
                class='rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500'
                href='#'
              >
                Login
              </a>

              <div class='hidden sm:flex'>
                <a
                  class='rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'
                  href='#'
                >
                  Register
                </a>
              </div>
            </div>

            <div class='block md:hidden'>
              <button class='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
