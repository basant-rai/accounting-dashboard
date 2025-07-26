'use client'

export const Statistics = () => {
  return (
    <>
      <div className="relative z-20 w-full max-w-full px-8 mt-5 lg:flex-0 shrink-0 ">
        <div className="relative min-w-0 mb-6 break-words bg-transparent border-0 border-solid shadow-none  rounded-2xl ">
          <h4 className="mb-0 font-bold text-4xl text-primary-500 px-1">General Statistics</h4>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-10">
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white  shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 leading-normal text-sm ">Total Income</p>
                    <h5 className="mb-0 font-bold ">
                      $53,000
                      <span className="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
                    </h5>
                  </div>
                </div>
                <div className="w-4/12 max-w-full px-3 text-right flex-0">
                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-primary-500 shadow-soft-2xl">
                    <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white  shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 leading-normal text-sm ">Total Income</p>
                    <h5 className="mb-0 font-bold ">
                      $53,000
                      <span className="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
                    </h5>
                  </div>
                </div>
                <div className="w-4/12 max-w-full px-3 text-right flex-0">
                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-primary-500 shadow-soft-2xl">
                    <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white  shadow-soft-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 leading-normal text-sm ">Total Income</p>
                    <h5 className="mb-0 font-bold ">
                      $53,000
                      <span className="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
                    </h5>
                  </div>
                </div>
                <div className="w-4/12 max-w-full px-3 text-right flex-0">
                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-primary-500 shadow-soft-2xl">
                    <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-8 mt-0 lg:flex-none">
        <div className="relative z-20 flex flex-col min-w-0 break-words bg-white border-0 border-solid rounded-2xl bg-clip-border">
          <div className="p-6 pb-0 mb-0 border-b-0 border-solid  rounded-t-2xl">
            <h6 className="">Sales overview</h6>
            <p className="leading-normal text-sm dark:opacity-60">
              <i className="fa fa-arrow-up text-lime-500" aria-hidden="true"></i>
              <span className="font-semibold">4% more</span> in 2021
            </p>
          </div>
          <div className="flex-auto p-4">
            {/* <div>
              <canvas id="chart-line" height="300" width="528" ></canvas>
            </div> */}
          </div>
        </div>
      </div>
    </>

  )
}
