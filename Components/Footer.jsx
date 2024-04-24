import React from "react";

const Footer = () => {
  const ProductList = ["Market","NFT Token", "Donation"];
  const contactList = ["support@bd.com", "info@example.com", "Contact Us"];
  const usefullLink = ["Home","About Us","CrowdFundingBD Bio"];
  return(
    <footer class="text-center text-white backgroundMain">
      <div class="mx-6 py-10 text-center">
        <div class="grid-cols-4 grid gap-14">
          <div class="">
            <h6 class="mb-4 flex items-center justify-center font-semibold uppercase">Hemel_31</h6>
            <p class="justify-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. At expedita culpa ab corrupti tempore. Libero blanditiis reprehenderit accusantium facere voluptate voluptates magni vel perspiciatis quidem. At, facilis vitae! Fugiat, blanditiis?</p>
          </div>
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
        <a class="font-semibold" href="https://tailwind-elements.com">Hemel_31</a>
      </div>
    </footer>
  );
};

export default Footer;