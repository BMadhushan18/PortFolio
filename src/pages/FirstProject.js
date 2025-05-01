import React from 'react';
import './FirstProject.css';

// — 1) Travel Features Data —


// — 2) Hero List Data —
const sectionsData = [
  {
    title: "See what’s new on Pluto TV, Tubi, & more.",
    description:
      "Select your favorite streaming services to discover more, search faster, and get curated recommendations—all without ever leaving Plex. Connect with friends to see who’s watching what, where.",
    buttonText: "Discover More Now",
    images: {
      main: "https://i.ibb.co/r5Dg5qy/smile2.png",
      avatarTop: "https://randomuser.me/api/portraits/men/32.jpg",
      avatarBottom: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    captions: {
      top: { user: "Jason Argon", action: "shared", item: "Smile 2", time: "2h" },
      bottom: { user: "Mia Gallo", action: "rated", item: "Anora", time: "2d" },
    },
  },
  // ← copy & paste this object to add more hero sections
];

function HeroSection({ data }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <button className="btn-secondary">{data.buttonText}</button>
      </div>

      <div className="hero-image">
        <img src={data.images.main} alt={data.captions.top.item} className="poster" />

        <div className="avatar avatar-top">
          <img src={data.images.avatarTop} alt={data.captions.top.user} />
        </div>
        <div className="caption caption-top">
          <strong>{data.captions.top.user}</strong> {data.captions.top.action}{" "}
          <em>{data.captions.top.item}</em> <span>{data.captions.top.time}</span>
        </div>

        <div className="avatar avatar-bottom">
          <img src={data.images.avatarBottom} alt={data.captions.bottom.user} />
        </div>
        <div className="caption caption-bottom">
          <strong>{data.captions.bottom.user}</strong> {data.captions.bottom.action}{" "}
          <em>{data.captions.bottom.item}</em> <span>{data.captions.bottom.time}</span>
        </div>
      </div>
    </div>
  );
}

const travelFeatures = [
  {
    title: "Travel in style, with exclusive VIP benefits",
    text:
      "Indulge in luxury with our curated collection of the world’s best hotels and enjoy exclusive VIP benefits, all at no extra cost.",
    img: "https://images.unsplash.com/photo-1501117716987-c8e17fad4ddd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Discover new inspiration for your next journey",
    text:
      "Whether it’s beautiful destinations or thrilling experiences, ignite your wanderlust and discover new reasons to travel and explore.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Belong to a community with a shared passion",
    text:
      "Connect with other members online or at our events and forge lasting friendships that transcend borders.",
    img: "https://images.unsplash.com/photo-1520901157935-9d1c5f8a9882?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function FirstProject() {
  return (
    <>
      {/* 1) Travel Features Section */}
      <section className="travel-section">
        {travelFeatures.map((f, i) => (
          <div key={i} className={`travel-item ${i % 2 === 1 ? "reverse" : ""}`}>
            <div className="travel-text">
              <h2>{f.title}</h2>
              <div className="underline" />
              <p>{f.text}</p>
            </div>
            <div className="travel-image">
              <img src={f.img} alt={f.title} />
            </div>
          </div>
        ))}
      </section>

      {/* 2) Free Movies Section with Video BG */}
      <section className="free-movies-section">
        <video
          className="bg-video"
          src="https://videos.pexels.com/video-files/29560142/12723937_1080_1920_60fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="overlay" />
        <div className="free-content">
          <h1>
            Free Movies to Watch,<br />
            Anytime Anywhere.
          </h1>
          <p>
            The search is over! Let Plex help you find the perfect movie to watch
            tonight for free.
          </p>
          <button className="btn-primary">Watch Free</button>
        </div>
        <div className="features">
          <div className="feature-item">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12h20M12 2v20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>Works Worldwide</h3>
            <p>No other free streaming service delivers more content to and from more countries worldwide.</p>
          </div>
          <div className="feature-item">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="2" y="5" width="20" height="14" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 8h20M2 16h20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>Thousands of Titles</h3>
            <p>Choose from movies, shows, sports and music documentaries, AMC series, Live TV and more.</p>
          </div>
          <div className="feature-item">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 12h14M12 5v14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>Always 100% Free</h3>
            <p>Watch now without any payment or subscription and end the search for free movie websites.</p>
          </div>
          <div className="feature-item">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="4" width="18" height="16" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 2v4M16 2v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>Device-Friendly</h3>
            <p>Stream the good stuff from your favorite devices including Apple, Android, Smart TVs and more.</p>
          </div>
        </div>
      </section>

      {/* 3) Hero List Sections */}
      <div className="sections-wrapper">
        {sectionsData.map((section, i) => (
          <HeroSection key={i} data={section} />
        ))}
      </div>
    </>
  );
}
