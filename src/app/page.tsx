import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Users, ChevronRight, ArrowRight, Music, Palette, Coffee, Beer, Star, Globe, X, Calendar, Zap, Heart, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1a1a17]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f4]/95 backdrop-blur-md border-b border-[#e8e3d5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#c8534a] flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div>
                <span className="text-[#1a1a17] font-bold text-lg tracking-tight">Paper Mill House</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-[#1a1a17]/60">
              {['Rooms', 'Gallery', 'Artists', 'Live Music', 'Eat & Drink', 'Neighborhood'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#c8534a] transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="#book" className="bg-[#1a1a17] text-white px-5 py-2.5 text-sm font-medium hover:bg-[#c8534a] transition-colors duration-300">
                Book a Room
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero — Bold Typography Style */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=1920&q=80"
            alt="The Paper Mill House — gallery corridor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a1a17]/50" />
        </div>
        <div className="relative z-10 max-w-4xl px-6 lg:px-16 py-32">
          <div className="mb-6">
            <span className="inline-block bg-[#c8534a] text-white text-xs px-3 py-1.5 tracking-widest uppercase font-medium">Sawyer Yards Arts District</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-none mb-2">
            Paper<br />
            Mill<br />
            House
          </h1>
          <div className="w-24 h-1 bg-[#c8534a] mb-6" />
          <p className="text-xl md:text-2xl text-white/80 font-light mb-10 leading-relaxed max-w-lg">
            Sleep inside the gallery. A creative boutique where local art, craft culture, and genuine hospitality collide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#rooms" className="flex items-center justify-center gap-2 bg-white text-[#1a1a17] px-8 py-4 text-sm font-bold hover:bg-[#c8534a] hover:text-white transition-colors">
              See the Rooms <ArrowRight size={16} />
            </a>
            <a href="#gallery" className="flex items-center justify-center gap-2 bg-[#c8534a] text-white px-8 py-4 text-sm font-bold hover:bg-[#b0453a] transition-colors">
              Enter the Gallery
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between">
          <div className="text-white/60 text-sm">
            <span className="text-[#c8534a] font-bold">14</span> artist studios on property
          </div>
          <div className="flex gap-3">
            <a href="#" className="text-white/60 hover:text-white transition-colors"><Globe size={18} /></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors"><X size={18} /></a>
          </div>
        </div>
      </section>

      {/* Booking Bar */}
      <section id="book" className="bg-[#1a1a17] py-7">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#c8534a] text-xs font-bold tracking-widest uppercase">Check In</label>
              <div className="flex items-center gap-3 bg-[#2a2a25] border border-[#3a3a35] px-4 py-3">
                <Clock size={15} className="text-[#c8534a]" />
                <input type="date" className="bg-transparent text-white text-sm w-full outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#c8534a] text-xs font-bold tracking-widest uppercase">Check Out</label>
              <div className="flex items-center gap-3 bg-[#2a2a25] border border-[#3a3a35] px-4 py-3">
                <Clock size={15} className="text-[#c8534a]" />
                <input type="date" className="bg-transparent text-white text-sm w-full outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#c8534a] text-xs font-bold tracking-widest uppercase">Guests</label>
              <div className="flex items-center gap-3 bg-[#2a2a25] border border-[#3a3a35] px-4 py-3">
                <Users size={15} className="text-[#c8534a]" />
                <select className="bg-transparent text-white text-sm w-full outline-none">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <a href="#rooms" className="w-full flex items-center justify-center gap-2 bg-[#c8534a] text-white px-6 py-3.5 text-sm font-bold uppercase hover:bg-[#b0453a] transition-colors">
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-20 bg-[#faf8f4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8534a] tracking-[0.3em] uppercase text-xs font-bold mb-4">The Concept</p>
              <h2 className="text-5xl font-black tracking-tighter text-[#1a1a17] leading-tight mb-6">
                A hotel that<br />
                <span className="text-[#c8534a]">makes art</span><br />
                the amenity.
              </h2>
              <p className="text-[#1a1a17]/60 text-lg leading-relaxed mb-6">
                The Paper Mill House was born from a simple conviction: great cities are made great by their artists, and artists need places to be brilliant. We converted a former industrial print house in Houston's Sawyer Yards into 28 guest rooms, three gallery spaces, a craft bar, and a live music venue — all animated by rotating artist residencies.
              </p>
              <p className="text-[#1a1a17]/50 text-base leading-relaxed">
                Every corridor is a show. Every room is curated. Every stay includes a private studio session with one of our 14 resident artists.
              </p>
            </div>
            <div className="relative h-[560px] overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80" alt="Artist at work in gallery studio" fill className="object-cover" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4">
                <p className="text-sm font-medium text-[#1a1a17]">Current Artist in Residence</p>
                <p className="text-[#c8534a] font-bold">Sofia Reyes — Textile & Fiber Art</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[#c8534a] tracking-widest uppercase text-xs font-bold mb-3">Accommodations</p>
              <h2 className="text-5xl font-black tracking-tighter text-[#1a1a17]">28 Rooms.<br /><span className="text-[#c8534a]">28 Artists.</span></h2>
            </div>
            <a href="#book" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#c8534a] hover:text-[#1a1a17] transition-colors">
              Book Direct <ArrowRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Printmaker Suite',
                size: '52 m²',
                artist: 'Curated by Marcus Teo',
                desc: 'Heavyweight printmaking aesthetic. Letterpress wall installations, a private etching station, and floor-to-ceiling north light.',
                price: 'From $220',
                img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80',
                tag: 'Artist Suite'
              },
              {
                name: 'Loft Standard',
                size: '34 m²',
                artist: 'Rotating exhibited works',
                desc: 'The quintessential Sawyer Yards loft experience. Soaring concrete ceilings, industrial steel windows, curated wall art.',
                price: 'From $145',
                img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=700&q=80',
                tag: null
              },
              {
                name: 'The Residency',
                size: '70 m²',
                artist: 'Full studio access included',
                desc: 'A two-level suite with a dedicated private art studio, access to rotating artist workshops, and a personal gallery wall.',
                price: 'From $340',
                img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=700&q=80',
                tag: 'Best for Creatives'
              },
              {
                name: 'Gallery Double',
                size: '30 m²',
                artist: 'Featured artist series',
                desc: 'Two doubles with curated print installations. Works rotate quarterly — guests vote on the next solo exhibition.',
                price: 'From $130',
                img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=700&q=80',
                tag: null
              },
              {
                name: 'Terrace Studio',
                size: '45 m²',
                artist: 'Outdoor installation views',
                desc: 'Private terrace overlooking the Sawyer Yards mural corridor. Includes a sketching kit, artisan coffee set, and daily studio visit.',
                price: 'From $195',
                img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80',
                tag: 'Outdoor Views'
              },
              {
                name: 'The Penthouse',
                size: '110 m²',
                artist: 'Grand installation space',
                desc: 'The entire top floor. Full rooftop terrace, two artist studios, commissioned wall art, and a private live music stage.',
                price: 'From $580',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
                tag: 'Premium'
              },
            ].map((room) => (
              <div key={room.name} className="group bg-[#faf8f4] border border-[#e8e3d5] hover:border-[#c8534a] transition-all duration-400">
                <div className="relative h-56 overflow-hidden">
                  <Image src={room.img} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  {room.tag && (
                    <div className="absolute top-3 left-3 bg-[#c8534a] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                      {room.tag}
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-black tracking-tight">{room.name}</h3>
                    <span className="text-[#c8534a] text-sm font-bold">{room.size}</span>
                  </div>
                  <p className="text-[#c8534a] text-xs font-bold mb-3">✦ {room.artist}</p>
                  <p className="text-[#1a1a17]/50 text-sm leading-relaxed mb-5">{room.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#e8e3d5]">
                    <span className="text-[#1a1a17] font-black text-lg">{room.price}<span className="text-[#1a1a17]/40 text-xs font-normal"> / night</span></span>
                    <a href="#book" className="flex items-center gap-1 text-sm font-bold text-[#c8534a] hover:text-[#1a1a17] transition-colors">
                      Book <ChevronRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — Masonry */}
      <section id="gallery" className="py-24 bg-[#1a1a17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#c8534a] tracking-widest uppercase text-xs font-bold mb-3">Visual Journal</p>
              <h2 className="text-5xl font-black tracking-tighter text-white">The Gallery</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#c8534a] hover:text-white transition-colors">
              Full Exhibition <Globe size={14} />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80" alt="Gallery main exhibition" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&q=80" alt="Sculpture installation" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=600&q=80" alt="Textile art closeup" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80" alt="Paintings installation" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="md:col-span-2 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=800&q=80" alt="Hotel bar area" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Local mural art" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80" alt="Live music event" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Music / Events */}
      <section id="artists" className="py-24 bg-[#c8534a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white/60 tracking-widest uppercase text-xs font-bold mb-4">On Property</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 leading-none">
                Live music.<br />
                Every Thursday<br />
                through Sunday.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                The Mill Stage hosts emerging and established artists from Houston's own Third Ward and beyond. Jazz, indie, folk, neo-soul — no cover, no pretension, just genuine music.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="flex items-center justify-center gap-2 bg-white text-[#c8534a] px-8 py-4 text-sm font-bold hover:bg-[#1a1a17] hover:text-white transition-colors">
                  <Calendar size={16} /> See This Week's Lineup
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { day: 'Thursday', genre: 'Open Mic & Jazz', time: '7pm – 10pm', highlight: true },
                { day: 'Friday', genre: 'Indie & Alt', time: '8pm – midnight', highlight: true },
                { day: 'Saturday', genre: 'Neo-Soul & R&B', time: '7pm – midnight', highlight: true },
                { day: 'Sunday', genre: 'Folk & Acoustic', time: '5pm – 9pm', highlight: false },
              ].map(({ day, genre, time, highlight }) => (
                <div key={day} className={`p-6 ${highlight ? 'bg-white/20' : 'bg-white/10'} border border-white/20`}>
                  <h4 className="text-white font-black mb-1">{day}</h4>
                  <p className="text-white font-bold text-sm">{genre}</p>
                  <p className="text-white/60 text-xs mt-1">{time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities — Creative Features */}
      <section className="py-24 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c8534a] tracking-widest uppercase text-xs font-bold mb-3">On-Site</p>
            <h2 className="text-5xl font-black tracking-tighter text-[#1a1a17]">Not a Hotel.<br /><span className="text-[#c8534a]">A Creative Hub.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Palette, name: '14 Artist Studios', desc: 'Permanent resident artists on-property. Guests receive a complimentary 1-hour studio session during their stay.', color: 'bg-[#f0ebe0]' },
              { icon: Music, name: 'The Mill Stage', desc: 'Live music venue with 200-person capacity. Craft cocktails, a locally curated beer list, and rotating food pop-ups.', color: 'bg-[#e8ddd5]' },
              { icon: Coffee, name: 'Ink & Grounds', desc: 'House-roasted coffee from Texas roasters. Fresh pastries, avo toast, and everything you need to start the day right.', color: 'bg-[#f0ebe0]' },
              { icon: Beer, name: 'The Press Bar', desc: 'Late-night craft bar. Industrial aesthetic, 24 taps of local and regional craft beer, and a serious cocktail program.', color: 'bg-[#e8ddd5]' },
              { icon: Zap, name: 'Artist Workshops', desc: 'Weekly workshops led by resident artists. Watercolor, printmaking, ceramics, and textile art available to all guests.', color: 'bg-[#f0ebe0]' },
              { icon: Heart, name: 'The Book Nook', desc: 'A curated library of 800 art, architecture, and design books. Open 24/7. Borrowing encouraged.', color: 'bg-[#e8ddd5]' },
            ].map(({ icon: Icon, name, desc, color }) => (
              <div key={name} className={`${color} p-8 border border-[#e8e3d5] hover:border-[#c8534a] transition-all duration-300`}>
                <div className="w-10 h-10 bg-[#c8534a] flex items-center justify-center mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-black text-lg mb-2">{name}</h3>
                <p className="text-[#1a1a17]/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood */}
      <section id="neighborhood" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#c8534a] tracking-widest uppercase text-xs font-bold mb-3">Around Here</p>
            <h2 className="text-5xl font-black tracking-tighter text-[#1a1a17]">Sawyer Yards<br /><span className="text-[#c8534a]">& the Third Ward</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Sawyer Yards', cat: 'Art Galleries', dist: 'Walk from lobby', img: 'https://images.unsplash.com/photo-1569420953151-d7c76b340d25?w=600&q=80', desc: 'Four-level former sewing mill turned creative campus. 15 rotating galleries, studios, restaurants, and the iconic rooftop mural cycle.' },
              { name: 'Houston Center for Photography', cat: 'Culture', dist: '4 min drive', img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', desc: 'One of the nation\'s oldest photography-focused museums. Free on the first Sunday of each month.' },
              { name: 'Nonno\'s Pizza', cat: 'Local Favorite', dist: '6 min walk', img: 'https://images.unsplash.com/photo-1529193876384-55e9be230b23?w=600&q=80', desc: 'Neapolitan pizza that regularly draws lines around the block. BYOB. Cash only. Worth every minute of the wait.' },
              { name: 'Urban Arts Junction', cat: 'Street Art', dist: 'Walk from lobby', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Two city blocks of rotating murals from Houston\'s most celebrated street artists. Best viewed at dusk.' },
              { name: 'Eight Row Flint', cat: 'Bar & Garden', dist: '8 min walk', img: 'https://images.unsplash.com/photo-1572116469696-31de96f4a91e?w=600&q=80', desc: 'Village Brewery\'s beer garden with food trucks, live music nights, and a genuinely relaxed outdoor atmosphere.' },
              { name: 'Mikado Japanese Gardens', cat: 'Green Space', dist: '10 min drive', img: 'https://images.unsplash.com/photo-1584589168549-2b32f1d037df?w=600&q=80', desc: 'A hidden gem tucked inside Memorial Park. Stone lanterns, koi ponds, tea house, and one of the most serene walks in the city.' },
            ].map((poi) => (
              <div key={poi.name} className="group relative h-72 overflow-hidden">
                <Image src={poi.img} alt={poi.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a17] via-[#1a1a17]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#c8534a] text-xs font-bold uppercase tracking-wider">{poi.cat}</span>
                    <span className="text-white/40 text-xs">• {poi.dist}</span>
                  </div>
                  <h3 className="text-white font-black text-lg mb-1">{poi.name}</h3>
                  <p className="text-white/60 text-sm">{poi.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1a1a17]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-[#c8534a] fill-[#c8534a]" />)}
          </div>
          <p className="text-2xl font-black text-white italic leading-relaxed mb-8">&ldquo;I've stayed in design hotels on four continents. The Paper Mill House is the first one that felt like it had a genuine soul. The art programming alone is worth the trip.&rdquo;</p>
          <p className="text-[#c8534a] text-sm font-bold">Priya M., Creative Director — Austin, TX</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#faf8f4] border-t border-[#e8e3d5] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#c8534a] flex items-center justify-center mx-auto ml-0">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="font-black text-lg">Paper Mill House</span>
              </div>
              <p className="text-[#1a1a17]/50 text-sm leading-relaxed max-w-sm mb-6">A boutique hotel built inside a reimagined print house in Houston's Sawyer Yards Arts District. Sleep inside the gallery.</p>
              <div className="flex gap-4">
                <a href="#" className="text-[#1a1a17]/40 hover:text-[#c8534a] transition-colors"><Globe size={18} /></a>
                <a href="#" className="text-[#1a1a17]/40 hover:text-[#c8534a] transition-colors"><X size={18} /></a>
                <a href="#" className="text-[#1a1a17]/40 hover:text-[#c8534a] transition-colors"><Globe size={18} /></a>
              </div>
            </div>
            <div>
              <h4 className="text-[#c8534a] text-xs font-bold tracking-widest uppercase mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-[#1a1a17]/60">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                  <span>2145 Sawyer Heights Blvd<br />Houston, TX 77008</span>
                </div>
                <div><a href="tel:+17135559900" className="hover:text-[#c8534a] transition-colors">+1 (713) 555-9900</a></div>
                <div><a href="mailto:stay@papermillhouse.com" className="hover:text-[#c8534a] transition-colors">stay@papermillhouse.com</a></div>
              </div>
            </div>
            <div>
              <h4 className="text-[#c8534a] text-xs font-bold tracking-widest uppercase mb-4">Quick Links</h4>
              <div className="space-y-3 text-sm">
                {['Rooms & Suites', 'Gallery', 'Live Music Schedule', 'Artist Residencies', 'Press', 'Careers'].map((link) => (
                  <a key={link} href="#" className="block text-[#1a1a17]/60 hover:text-[#c8534a] transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#e8e3d5] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#1a1a17]/30 text-xs">© 2026 Paper Mill House. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-[#1a1a17]/30">
              <a href="#" className="hover:text-[#c8534a]/60">Privacy</a>
              <a href="#" className="hover:text-[#c8534a]/60">Terms</a>
              <a href="#" className="hover:text-[#c8534a]/60">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
