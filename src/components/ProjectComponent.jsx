import React from "react";
import { Link } from "react-router-dom";

const ProjectComponent = () => {
  return (
    <section className="bg-primary grid place-items-center py-12">
      <div className="flex flex-col w-3/4 space-y-2 max-xl:w-full max-xl:px-8 max-lg:px-4">
        <h2 className="text-6xl font-bold text-base-100 max-sm:text-4xl">PROJECTS</h2>
        <div className="flex flex-col divide-y-2">
          <div className="text-base-100 py-8 grid grid-cols-[60%_40%] space-x-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:space-x-0 max-sm:space-y-4">
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img className="w-full" src="images/projects/ggblog.png" />
            </div>
            <div className="space-y-4 flex flex-col">
              <h3 className="font-semibold text-4xl"># GGBlog</h3>
              <p className="text-xl">
                This website is the project for practice frontend development. I get inspired from GamingDose and ChatchawanDew (from
                GitHub).
              </p>
              <p className="text-xl"><span className="font-semibold">Built with: </span>HTML, CSS, JavaScript</p>
              <Link
                to="https://github.com/WoraponK/ggblog-project"
                target="_blank"
              >
                <button className="btn w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  Read More on GitHub
                </button>
              </Link>
            </div>
          </div>
          <div className="text-base-100 py-8 grid grid-cols-[60%_40%] space-x-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:space-x-0 max-sm:space-y-4">
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img className="w-full" src="images/projects/aboutmoney.png" />
            </div>
            <div className="space-y-4 flex flex-col">
              <h3 className="font-semibold text-4xl"># aboutMoney</h3>
              <p className="text-xl">
                This project is a CRUD Web Application for store income and expenses datas.
              </p>
              <p className="text-xl"><span className="font-semibold">Built with: </span>Angular, TailwindCSS, Express, MySQL</p>
              <Link
                to="https://github.com/WoraponK/aboutmoney-angular"
                target="_blank"
              >
                <button className="btn w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  Read More on GitHub
                </button>
              </Link>
            </div>
          </div>
          <div className="text-base-100 py-8 grid grid-cols-[60%_40%] space-x-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:space-x-0 max-sm:space-y-4">
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img className="h-full" src="images/projects/wouldurather.png" />
            </div>
            <div className="space-y-4 flex flex-col">
              <h3 className="font-semibold text-4xl"># WouldYouRather</h3>
              <p className="text-xl">
                This is a website about would you rather? I saw a video from Youtube and got the idea for to make it.
              </p>
              <p className="text-xl"><span className="font-semibold">Built with: </span>Vue, TailwindCSS, Express, MySQL</p>
              <Link
                to="https://github.com/WoraponK/would-you-rather"
                target="_blank"
              >
                <button className="btn w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  Read More on GitHub
                </button>
              </Link>
            </div>
          </div>
          <div className="text-base-100 py-8 grid grid-cols-[60%_40%] space-x-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:space-x-0 max-sm:space-y-4">
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img className="h-full" src="images/projects/crudmanagement.jpg" />
            </div>
            <div className="space-y-4 flex flex-col">
              <h3 className="font-semibold text-4xl"># CRUD Student Management</h3>
              <p className="text-xl">
                This is a website about student management, It can CRUD (Create, Read, Update, Delete) data of students.
              </p>
              <p className="text-xl"><span className="font-semibold">Built with: </span>Vue, TailwindCSS, SweetAlert, Express, MySQL</p>
              <Link
                to="https://github.com/WoraponK/crud-student-management"
                target="_blank"
              >
                <button className="btn w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  Read More on GitHub
                </button>
              </Link>
            </div>
          </div>
          <div className="text-base-100 py-8 grid grid-cols-[60%_40%] space-x-8 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:space-x-0 max-sm:space-y-4">
            <div className="w-full aspect-video overflow-hidden rounded-lg">
              <img className="w-full" src="images/projects/regblog.png" />
            </div>
            <div className="space-y-4 flex flex-col">
              <h3 className="font-semibold text-4xl"># REG Blog UP new designed</h3>
              <p className="text-xl">
              I created a new design for reg blog page of University of Phayo And main aim to create new design are navbar, blog title bar, font size, and share button. 
              </p>
              <p className="text-xl"><span className="font-semibold">Built with: </span>HTML, CSS, JavaScript</p>
              <Link
                to="https://github.com/WoraponK/reg-blog-news_UP"
                target="_blank"
              >
                <button className="btn w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  Read More on GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
