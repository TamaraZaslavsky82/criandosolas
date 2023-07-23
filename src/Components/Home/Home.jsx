import React from "react";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
function Home() {
  return (
    <div className="w-screen max-w-[1200px] h-full py-10 ">
      <div className='flex flex-col gap-10 p-10'>
        <section className="flex flex-col-reverse gap-5 justify-between  lg:flex-row ">
          <div className=" flex flex-col justify-start gap-y-5">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima ve
            </p>
            <button className="primaryButton">Contactanos</button>
          </div>
          <img src={image1} alt="image1" />
        </section>
        <section className=" flex flex-col lg:flex-row w-full justify-between gap-10">
          <div className="flex flex-col lg:w-[500px] bg-[#C89BC8] box-border p-5 gap-x-5 rounded-3xl justify-between">
            <img src={image2} alt="image2" className="w-full" />
            <div className="flex flex-col w-full ">
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
              </p>
              <button className="secondaryButton">Se parte</button>
            </div>
          </div>
          <div className="flex flex-col lg:w-[500px] bg-[#C89BC8] box-border px-5 py-4 gap-x-5 rounded-3xl justify-between">
            <img src={image3} alt="image3" className="w-full" />
            <div className="flex flex-col w-full ">
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
              </p>
              <button className="secondaryButton">Se parte</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
