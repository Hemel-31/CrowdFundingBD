import React from "react";

const Footer = () => {
  const ProductList = ["Market","NFT Token", "Donation"];
  const contactList = ["support@bd.com", "info@example.com", "Contact Us"];
  const usefullLink = ["Home","About Us","CrowdFundingBD Bio"];
  return(
    <footer class="text-center text-white backgroundMain">
      <div class="mx-6 py-10 text-center">
        <div class="grid-cols-3 grid gap-14">
          
          <div class="">
          <h6 class="mb-4 flex items-center justify-center font-semibold uppercase">Products</h6>
          {ProductList.map((el,i)=>(
            <p class="mb-4" key={i+1}>
              <a href="#!">{el}</a>
            </p>
          ))}
          </div>
          <div class="">
          <h6 class="mb-4 flex items-center justify-center font-semibold uppercase">Useful Links</h6>
          {usefullLink.map((el,i)=>(
            <p class="mb-4" key={i+1}>
              <a href="#!">{el}</a>
            </p>
          ))}
          </div>
          <div>
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase">Conract</h6>
            {contactList.map((el,i)=>(
            <p class="mb-4" key={i+1}>
              <a href="#!">{el}</a>
            </p>
          ))}
          </div>
        </div>
      </div>
      <div class="backgroundMain p-6 text-center">
        <span>© 2024 Copyright: </span>
        <a class="font-semibold" href="https://www.linkedin.com/in/munem-shahriar-hemel-67aa10105/">Hemel_31</a>
      </div>
    </footer>
  );
};

export default Footer;