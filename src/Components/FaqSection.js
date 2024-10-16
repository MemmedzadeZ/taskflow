import React from "react";

function FaqSection  () {
  return (
    <section className="list05 cid-urdsLHJMMb" id="faq-3-urdsLHJMMb">
      <div className="container">
        <div className="col-12 mb-5 content-head">
          <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
            <strong>Frequently Asked Questions</strong>
          </h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {faqData.map((faq, index) => (
              <div
                className={`item features-without-image col-12 ${
                  index === 0 ? "active" : ""
                }`}
                key={index}
              >
                <div className="item-wrapper">
                  <h5 className="mbr-card-title mbr-fonts-style mt-0 mb-3 display-5">
                    <strong>{faq.question}</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Data for the FAQ
const faqData = [
  {
    question: "What is Projectify all about?",
    answer: "Projectify is your go-to tool for managing projects effortlessly!",
  },
  {
    question: "How do I sign up?",
    answer: "Click on the SignUp button and join the fun!",
  },
  {
    question: "Is there a free trial?",
    answer: "Absolutely! Try us out for free!",
  },
  {
    question: "Can I use it on mobile?",
    answer: "Yes! Projectify is mobile-friendly for on-the-go management!",
  },
  {
    question: "What if I need help?",
    answer: "Our support team is here 24/7 to assist you!",
  },
];


export default FaqSection;