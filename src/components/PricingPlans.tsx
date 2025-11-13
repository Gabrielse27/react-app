 import React from "react";
import "./pricing-plans.css";


const plans = [
    
  {
    
    title: "Small Unit",
    price: "$50",
    period: "/month",
    description: "Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.",
    features: [
      "Nam nec ipsum in dolor",
      "Fusce nec ligula ut arcu",
      "Aliquam pulvinar arcu in",
      "Duis gravida enim porta",
      "Etiam eget libero non ligula",
    ],
    featured: false,
  },
  {
    title: "Medium Unit",
    price: "$100",
    period: "/month",
    description: "Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.",
    features: [
      "Nam nec ipsum in dolor",
      "Fusce nec ligula ut arcu",
      "Aliquam pulvinar arcu in",
      "Duis gravida enim porta",
      "Etiam eget libero non ligula",
    ],
    featured: true, // Detta är den mörkgröna
  },
  {
    title: "Large Unit",
    price: "$150",
    period: "/month",
    description: "Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.",
    features: [
      "Nam nec ipsum in dolor",
      "Fusce nec ligula ut arcu",
      "Aliquam pulvinar arcu in",
      "Duis gravida enim porta",
      "Etiam eget libero non ligula",
    ],
    featured: false,
  },
  {
    title: "Executive Unit",
    price: "$200",
    period: "/month",
    description: "Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.",
    features: [
      "Nam nec ipsum in dolor",
      "Fusce nec ligula ut arcu",
      "Aliquam pulvinar arcu in",
      "Duis gravida enim porta",
      "Etiam eget libero non ligula",
    ],
    featured: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="pricing-section" aria-labelledby="pricing-heading">
    
        <p className="price-tag">Pricing Plan</p>
      <h2 id="pricing-heading" className="pricing-title">Find the Perfect Plan for<br>
      </br> Your Storage Needs</h2>

      <div className="pricing-container">
        {plans.map((plan, index) => (

          <div key={index} className={`plan-card ${plan.featured ? "featured" : ""}`}>
            
            <h3 className="plan-title">{plan.title}</h3>
            <div>
              <span className="plan-price">{plan.price}</span>
              <span className="plan-period">{plan.period}</span>
            </div>
            <p className="plan-description">{plan.description}</p>

           <hr className="plan-divider" />

            <ul className="feature-list">
                





              {plan.features.map((feature, index) => (
                
                <li key={index}>
<i className="bi bi-check-circle-fill me-2" aria-hidden="true"></i>
                    {feature}
                    </li>
                
              ))}
              
            </ul>
            <button className="plan-button" aria-label={`Rent the ${plan.title} plan`}>Rent Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
