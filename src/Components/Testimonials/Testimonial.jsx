const Testimonial = ({ testimonial }) => {
    return (
      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
        <div className="bg-neutral p-6 border rounded-md text-md border-neutral-800 font-thin">
          <p className="">{testimonial.text}</p>
          <div className="flex mt-8 items-center">
            <img
              src={testimonial.image}
              alt={testimonial.user}
              className="h-12 w-12 mr-6 rounded-full border border-neutral-300"
            />
            <div>
              <h6 className="text-xl">{testimonial.user}</h6>
              <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testimonial
