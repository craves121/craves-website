import { motion } from "framer-motion"

import instapost1 from "../assets/pics_gallery/instapost1.jpeg"
import instapost2 from "../assets/pics_gallery/instapost2.jpeg"
import instapost3 from "../assets/pics_gallery/instapost3.jpeg"
import instapost4 from "../assets/pics_gallery/instapost4.jpeg"

export default function Gallery() {

  return (

    <section className="px-6 py-20">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-yellow-400 mb-14"
      >
        Gallery 📸
      </motion.h2>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">

        {/* IMAGE 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={instapost1}
            alt="gallery"
            className="w-64 rounded-3xl hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* IMAGE 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={instapost2}
            alt="gallery"
            className="w-64 rounded-3xl hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* IMAGE 3 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={instapost3}
            alt="gallery"
            className="w-64 rounded-3xl hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* IMAGE 4 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={instapost4}
            alt="gallery"
            className="w-64 rounded-3xl hover:scale-105 transition duration-300"
          />
        </motion.div>

      </div>

    </section>
  )
}