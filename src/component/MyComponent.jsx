import * as React from "react";

export const MyComponent = (props) => {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">World Peas</div>
          <div className="div-4">
            <div className="div-5">Shop</div>
            <div className="div-6">Newstand</div>
            <div className="div-7">Who we are</div>
            <div className="div-8">My profile</div>
            <div className="div-9">Basket (3)</div>
          </div>
        </div>
        <div className="div-10">
          <div className="div-11">
            <div className="div-12">Produce</div>
            <div className="div-13">
              <span style="font-weight: 500;">Fresh</span>
              <span style="font-weight: 300;"> — August 21, 2023</span>
            </div>
          </div>
          <div className="div-14">
            <div className="div-15">Default</div>
            <div className="div-16">A-Z</div>
            <div className="div-17">List view</div>
          </div>
        </div>
        <div className="div-18">
          <div className="div-19">
            <div className="column">
              <div className="div-20">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="img"
                />
                <div className="div-21">
                  <div className="div-22">Heirloom tomato</div>
                  <div className="div-23">$5.99 / lb</div>
                  <div className="div-24">Grown in San Juan Capistrano, CA</div>
                </div>
              </div>
            </div>
            <div className="column-2">
              <div className="div-25">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="img"
                />
                <div className="div-26">
                  <div className="div-27">Organic ginger</div>
                  <div className="div-28">$12.99 / lb</div>
                  <div className="div-29">Grown in Huntington Beach, CA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          padding: 32px 0 50px;
        }
        .div-2 {
          align-self: center;
          display: flex;
          width: 100%;
          max-width: 1248px;
          justify-content: space-between;
          gap: 20px;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-3 {
          color: #426b1f;
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: -0.32px;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
          font: 500 32px/100% Newsreader, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-4 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          font-size: 16px;
          color: #000;
          font-weight: 400;
          text-align: center;
          line-height: 130%;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-5 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          align-self: end;
          margin-top: 23px;
        }
        .div-6 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .div-7 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .div-8 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .div-9 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          justify-content: center;
          border-radius: 8px;
          background-color: #426b1f;
          align-self: stretch;
          flex-grow: 1;
          color: #fff;
          font-weight: 600;
          white-space: nowrap;
          padding: 17px 24px;
        }
        @media (max-width: 991px) {
          .div-9 {
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-10 {
          background-color: #fff;
          display: flex;
          margin-top: 32px;
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          color: #000;
          white-space: nowrap;
          padding: 42px 80px;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-11 {
          align-self: start;
          display: flex;
          margin-top: 13px;
          justify-content: space-between;
          gap: 20px;
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
            flex-wrap: wrap;
            white-space: initial;
          }
        }
        .div-12 {
          font-feature-settings: "clig" off, "liga" off;
          letter-spacing: -1.28px;
          flex-grow: 1;
          font: 64px/120% Newsreader, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-12 {
            font-size: 40px;
          }
        }
        .div-13 {
          font-feature-settings: "clig" off, "liga" off;
          align-self: end;
          margin-top: 32px;
          flex-grow: 1;
          font: 20px/130% Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            white-space: initial;
          }
        }
        .div-14 {
          align-self: end;
          display: flex;
          margin-top: 26px;
          gap: 8px;
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          line-height: 130%;
        }
        @media (max-width: 991px) {
          .div-14 {
            white-space: initial;
          }
        }
        .div-15 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          justify-content: center;
          border-radius: 20px;
          background-color: #426b1f;
          flex-grow: 1;
          color: #fff;
          padding: 14px 17px;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .div-16 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          justify-content: center;
          border-radius: 20px;
          border: 1px solid #c2c2c2;
          background-color: #fff;
          aspect-ratio: 1.55;
          padding: 14px 17px;
        }
        @media (max-width: 991px) {
          .div-16 {
            white-space: initial;
          }
        }
        .div-17 {
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          justify-content: center;
          border-radius: 20px;
          border: 1px solid #c2c2c2;
          background-color: #fff;
          flex-grow: 1;
          padding: 14px 18px;
        }
        @media (max-width: 991px) {
          .div-17 {
            white-space: initial;
          }
        }
        .div-18 {
          width: 822px;
          max-width: 100%;
          margin: 40px 0 0 96px;
        }
        .div-19 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-19 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-20 {
          border-radius: 24px;
          border: 2px solid #e6e6e6;
          background-color: #fafaf5;
          display: flex;
          flex-grow: 1;
          padding-bottom: 31px;
          flex-direction: column;
          font-size: 20px;
          font-weight: 600;
          line-height: 130%;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-20 {
            margin-top: 32px;
          }
        }
        .img {
          aspect-ratio: 1.33;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        .div-21 {
          align-self: start;
          display: flex;
          flex-direction: column;
          margin: 29px 0 0 24px;
        }
        @media (max-width: 991px) {
          .div-21 {
            margin-left: 10px;
          }
        }
        .div-22 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
        }
        .div-23 {
          color: #426b1f;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          margin-top: 14px;
        }
        .div-24 {
          color: #6d6d6d;
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 26px;
          white-space: nowrap;
          font: 400 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-24 {
            white-space: initial;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-25 {
          border-radius: 24px;
          border: 2px solid #e6e6e6;
          background-color: #fafaf5;
          display: flex;
          flex-grow: 1;
          padding-bottom: 31px;
          flex-direction: column;
          font-size: 20px;
          font-weight: 600;
          line-height: 130%;
          width: 100%;
        }
        @media (max-width: 991px) {
          .div-25 {
            margin-top: 32px;
          }
        }
        .div-26 {
          align-self: start;
          display: flex;
          flex-direction: column;
          margin: 29px 0 0 24px;
        }
        @media (max-width: 991px) {
          .div-26 {
            margin-left: 10px;
          }
        }
        .div-27 {
          color: #000;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
        }
        .div-28 {
          color: #426b1f;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          margin-top: 10px;
        }
        .div-29 {
          color: #6d6d6d;
          font-feature-settings: "clig" off, "liga" off;
          margin-top: 26px;
          white-space: nowrap;
          font: 400 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-29 {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}


