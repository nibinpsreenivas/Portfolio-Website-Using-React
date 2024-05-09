import React from "react";
import { motion } from "framer-motion";

const Card2 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="https://github.com/nibinpsreenivas/cec_connect">
        <img
          class="rounded-t-lg w-full"
          src="https://raw.githubusercontent.com/nibinpsreenivas/Hellogram_Node-js/main/assets/Add%20a%20subheading.gif"
          alt=""
        />
      </a>
      <div class="p-5">
        <a href="helo">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hellogram
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Hellogram is a fully functional social media app with multiple features built with flutter and dart.
        </p>
        <a
          href="https://github.com/nibinpsreenivas/Hellogram_Node-js"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card2;
