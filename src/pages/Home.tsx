return (
    <>
      <Title value="Night Owl | Free Movie Website" />

      <div className="flex md:hidden justify-between items-center">
        <Link to="/" className="flex gap-2 items-center">
          <LazyLoadImage
            src="/logo.png"
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="text-xl text-white font-medium uppercase">
            Night<span className="text-primary">Owl</span>
          </p>
        </Link>
        <button onClick={() => setIsSidebarActive((prev) => !prev)}>
          <GiHamburgerMenu size={25} />
        </button>
      </div>

      <div className="flex items-start">
        <Sidebar
          setIsSidebarActive={setIsSidebarActive}
          isSidebarActive={isSidebarActive}
        />

        <div className="flex-grow pt-0 pb-7 border-x border-gray-darken min-h-screen">
          <div className="flex justify-between items-center">
            <div className="inline-flex gap-[40px] pb-[14px] border-b relative">
              <button
                onClick={() => {
                  setCurrentTab("tv");
                  localStorage.setItem("currentTab", "tv");
                }}
                className={`${
                  currentTab === "tv" &&
                  "text-white font-medium after:absolute "
                } transition duration-300 hover:text-white`}
              >
                TV Show
              </button>
              <button
                onClick={() => {
                  setCurrentTab("movie");
                  localStorage.setItem("currentTab", "movie");
                }}
                className={`${
                  currentTab === "movie" &&
                  "text-white font-medium after:absolute after:bottom-0 "
                } transition hover:text-white`}
              >
                Movie
              </button>
            </div>
            <div className="flex gap-6 items-center">
              <p>{currentUser?.displayName || "Anonymous"}</p>
              <LazyLoadImage
                src={
                 "DefaultAvatar.png"
                }
                alt="User avatar"
                className="w-7 h-7 rounded-full object-cover"
              />
            </div>
          </div>

          {currentTab === "movie" && (
            <MainHomeFilms
              data={dataMovie}
              dataDetail={dataMovieDetail}
              isLoadingBanner={isLoadingMovieDetail}
              isLoadingSection={isLoadingMovie}
            />
          )}
          {currentTab === "tv" && (
            <MainHomeFilms
              data={dataTV}
              dataDetail={dataTVDetail}
              isLoadingBanner={isLoadingTVDetail}
              isLoadingSection={isLoadingTV}
            />
          )}
        </div>

        <div className="shrink-0 max-w-[310px] w-full hidden lg:block  top-0 sticky ">
          <SearchBox />
          <RecommendGenres currentTab={currentTab} />
          <TrendingNow />
        </div>
      </div>

      <Footer />
    </>
  );
};

