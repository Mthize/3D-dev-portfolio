"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Avatar Column */}
        <div className="flex items-center justify-center">
          <div className="relative h-72 w-72 md:h-96 md:w-96">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                src={testimonials[active].src}
                alt={testimonials[active].name}
                className="h-full w-full rounded-2xl object-cover shadow-2xl"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.9, ease: "easeInOut" }}
              className="flex flex-col"
            >
              {/* Name */}
              <h3 className="text-2xl font-bold text-white">
                {testimonials[active].name}
              </h3>

              {/* Designation */}
              <p className="text-sm text-gray-400">
                {testimonials[active].designation}
              </p>

              {/* Quote */}
              <p className="mt-6 text-base leading-relaxed text-gray-300">
                {testimonials[active].quote}
              </p>

              {/* Navigation Buttons */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={handlePrev}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors hover:bg-neutral-700"
                  aria-label="Previous testimonial"
                >
                  <IconArrowLeft className="h-5 w-5 text-gray-300 transition-transform group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors hover:bg-neutral-700"
                  aria-label="Next testimonial"
                >
                  <IconArrowRight className="h-5 w-5 text-gray-300 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
