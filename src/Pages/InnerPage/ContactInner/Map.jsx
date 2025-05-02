const Map = () => {
  return (
    <section>
      <div className="relative">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7131484647143!2d106.8329272!3d-6.3013715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edf6f4385eb3%3A0x71b56a87e2cf5c4b!2sTower%20G%20Arkadia!5e0!3m2!1sid!2sid!4v1746158714533!5m2!1sid!2sid"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg w-full saturate-0"
        ></iframe> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7131484647143!2d106.8329272!3d-6.3013715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edf6f4385eb3%3A0x71b56a87e2cf5c4b!2sTower%20G%20Arkadia!5e0!3m2!1sid!2sid!4v1746158714533!5m2!1sid!2sid"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
