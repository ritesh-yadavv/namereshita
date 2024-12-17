import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CancelRefundPolicy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-36 lg:max-w-4xl font-PlusJakartaSans">
          <h1 className="text-3xl font-bold mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="mb-2"> Last updated on 15-03-2024 16:28:07</p>
          <p className="mb-4">
            M S RESHITA believes in helping its customers as far as possible,
            and has therefore a liberal cancellation policy. Under this policy:
          </p>
          <p className="mb-4">
            • Cancellations will be considered only if the request is made
            immediately after placing the order. However, the cancellation
            request may not be entertained if the orders have been communicated
            to the vendors/merchants and they have initiated the process of
            shipping them
          </p>

          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">
              M S RESHITA does not accept cancellation requests for perishable
              items like flowers, eatables etc. However, refund/replacement can
              be made if the customer establishes that the quality of product
              delivered is not good
            </li>
            <li className="mb-2">
              In case of receipt of damaged or defective items please report the
              same to our Customer Service team. The request will, however, be
              entertained once the merchant has checked and determined the same
              at his own end. This should be reported within Only same day days
              of receipt of the products. In case you feel that the product
              received is not as shown on the site or as per your expectations,
              you must bring it to the notice of our customer service within
              Only same day days of receiving the product. The Customer Service
              Team after looking into your complaint will take an appropriate
              decision.
            </li>
            <li className="mb-2">
              In case of complaints regarding products that come with a warranty
              from manufacturers, please refer the issue to them. In case of any
              Refunds approved by the M S RESHITA, it’ll take 1-2 Days days for
              the refund to be processed to the end customer.
            </li>

            {/* <!-- More list items here --> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CancelRefundPolicy;
