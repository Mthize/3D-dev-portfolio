import { AnimatedTestimonials } from "../components/AnimatedTestimonials";
import { reviews } from "../constants";

const Testimonial = () => {
  const testimonials = reviews.map((review) => ({
    src: review.img,
    name: review.name,
    designation: review.username,
    quote: review.body,
  }));

  return (
    <section className="py-20">
      <div className="items-start mt-25 md:mt-35 c-space">
        <h2 className="text-heading">
          Testimonials
        </h2>
        <p className="mt-2 text-neutral-400">
          What people are saying
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </section>
  );
};

export default Testimonial
