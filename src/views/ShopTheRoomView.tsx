import React, { useState } from 'react';
import { Eye, ArrowRight, Sparkles, CheckCircle, MessageSquare } from 'lucide-react';
import { CuratedRoom, Product, SpaceCategory } from '../types';
import { CURATED_ROOMS } from '../data/rooms';
import { PRODUCTS } from '../data/products';
import { RoomHotspotViewer } from '../components/RoomHotspotViewer';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface ShopTheRoomViewProps {
  onSelectProduct: (product: Product) => void;
  onOpenConsultation: () => void;
  onWhatsAppEnquiry: (customMessage: string) => void;
}

export const ShopTheRoomView: React.FC<ShopTheRoomViewProps> = ({
  onSelectProduct,
  onOpenConsultation,
  onWhatsAppEnquiry
}) => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'hotspots' | 'before-after' | 'breakdown'>('hotspots');

  const currentRoom = CURATED_ROOMS[selectedRoomIndex] || CURATED_ROOMS[0];

  const roomProducts = currentRoom.includedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const handleRequestRoomWhatsApp = () => {
    const names = roomProducts.map((p) => p.name).join(', ');
    const msg = `Hi Interior Affairs, I am interested in the complete "${currentRoom.name}" curated space package (${currentRoom.estimatedTotalFormatted}). Selected pieces: ${names}. Can we discuss layout planning and fabrication timeline?`;
    onWhatsAppEnquiry(msg);
  };

  return (
    <div id="shop-the-room-view" className="py-12 sm:py-16 bg-[#F5F2EC]">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#756557] block mb-2 font-medium">
            Interactive Digital Showroom
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#24221F] mb-4">
            Shop The Room
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed">
            Experience complete architectural spaces conceived as harmonious wholes. Inspect individual hotspot pieces, toggle before-and-after transformations, or request the entire room suite.
          </p>
        </div>

        {/* Room Navigation Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-4 pb-4 mb-8 border-b border-[#E2DACF]">
          {CURATED_ROOMS.map((room, idx) => {
            const isSelected = selectedRoomIndex === idx;
            return (
              <button
                key={room.id}
                id={`room-tab-${room.id}`}
                onClick={() => setSelectedRoomIndex(idx)}
                className={`text-left p-4 border min-w-[280px] sm:min-w-[320px] transition-all flex-shrink-0 ${
                  isSelected
                    ? 'border-[#24221F] bg-[#FAF8F5] shadow-sm'
                    : 'border-[#E2DACF] bg-[#FAF8F5]/60 hover:border-[#756557]'
                }`}
              >
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#756557] block mb-1">
                  0{idx + 1} · {room.spaceType.toUpperCase()}
                </span>
                <h3 className="font-serif-editorial text-lg text-[#24221F] truncate mb-1">
                  {room.name}
                </h3>
                <span className="text-xs font-semibold text-[#24221F]">
                  Suite Total: {room.estimatedTotalFormatted}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interaction Mode Switcher */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-3 text-xs uppercase tracking-[0.14em]">
            <button
              onClick={() => setActiveTab('hotspots')}
              className={`px-4 py-2 border transition-all ${
                activeTab === 'hotspots'
                  ? 'bg-[#24221F] text-[#F5F2EC] border-[#24221F]'
                  : 'bg-transparent text-[#756557] border-[#D5C8B8] hover:border-[#24221F]'
              }`}
            >
              Interactive Hotspots
            </button>
            <button
              onClick={() => setActiveTab('before-after')}
              className={`px-4 py-2 border transition-all ${
                activeTab === 'before-after'
                  ? 'bg-[#24221F] text-[#F5F2EC] border-[#24221F]'
                  : 'bg-transparent text-[#756557] border-[#D5C8B8] hover:border-[#24221F]'
              }`}
            >
              Before & After Slider
            </button>
            <button
              onClick={() => setActiveTab('breakdown')}
              className={`px-4 py-2 border transition-all ${
                activeTab === 'breakdown'
                  ? 'bg-[#24221F] text-[#F5F2EC] border-[#24221F]'
                  : 'bg-transparent text-[#756557] border-[#D5C8B8] hover:border-[#24221F]'
              }`}
            >
              Piece Breakdown ({roomProducts.length})
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="border border-[#E2DACF] shadow-sm mb-16 overflow-hidden bg-[#FAF8F5]">
          {activeTab === 'hotspots' && (
            <RoomHotspotViewer
              room={currentRoom}
              onSelectProduct={onSelectProduct}
              onRequestRoomPackage={() => onOpenConsultation()}
            />
          )}

          {activeTab === 'before-after' && (
            <div className="p-4 sm:p-8">
              <BeforeAfterSlider
                beforeImage={currentRoom.beforeImage}
                afterImage={currentRoom.afterImage}
                beforeLabel="ORIGINAL RAW RESIDENCE"
                afterLabel={`INTERIOR AFFAIRS · ${currentRoom.name.toUpperCase()}`}
                className="aspect-[4/3] md:aspect-[16/9] w-full"
              />
              <p className="text-center text-xs text-[#756557] mt-4">
                Drag the divider horizontally to view how proportions, travertine stone, and ambient light elevate the volume.
              </p>
            </div>
          )}

          {activeTab === 'breakdown' && (
            <div className="p-6 sm:p-10">
              <h3 className="font-serif-editorial text-2xl text-[#24221F] mb-2">
                Curated Pieces Comprising This Suite
              </h3>
              <p className="text-xs text-[#756557] mb-8">
                Each piece can be acquired as part of the complete package or commissioned individually.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {roomProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-4 bg-[#F5F2EC] border border-[#E2DACF] flex flex-col justify-between"
                  >
                    <div>
                      <img
                        src={prod.images.primary}
                        alt={prod.name}
                        className="aspect-[4/3] object-cover mb-3 w-full bg-[#E7E1D8]"
                      />
                      <span className="text-[9px] uppercase tracking-wider text-[#756557]">
                        {prod.collection}
                      </span>
                      <h4 className="font-serif-editorial text-lg text-[#24221F] leading-tight">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-[#756557] mt-1">{prod.materials[0]}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E2DACF] flex justify-between items-center text-xs">
                      <span className="font-semibold text-[#24221F]">{prod.priceFormatted}</span>
                      <button
                        onClick={() => onSelectProduct(prod)}
                        className="text-[#24221F] uppercase tracking-wider font-semibold underline underline-offset-4"
                      >
                        Inspect Piece
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Room Architectural Blueprint & Material Narrative */}
        <div className="bg-[#FAF8F5] border border-[#E2DACF] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#756557] block font-medium">
              Spatial Concept Notes
            </span>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] leading-tight">
              {currentRoom.name}
            </h3>
            <p className="text-sm text-[#24221F] leading-relaxed">
              {currentRoom.philosophy}
            </p>

            <div className="pt-4 border-t border-[#E2DACF] space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-[#756557] uppercase tracking-wider">Spatial Volume:</span>
                <span className="font-medium text-[#24221F] uppercase">{currentRoom.spaceType} Sanctuary</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#756557] uppercase tracking-wider">Sensory Mood:</span>
                <span className="font-medium text-[#24221F] uppercase">{currentRoom.mood}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#756557] uppercase tracking-wider">Key Materials:</span>
                <span className="font-medium text-[#24221F] text-right max-w-xs">{currentRoom.materialsSummary}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between bg-[#F5F2EC] p-8 border border-[#E2DACF]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#756557] block mb-1">
                Curated Suite Pricing
              </span>
              <p className="font-serif-editorial text-3xl sm:text-4xl text-[#24221F] mb-4">
                {currentRoom.estimatedTotalFormatted}
              </p>
              <p className="text-xs text-[#756557] leading-relaxed mb-6">
                Includes all {roomProducts.length} core architectural furniture pieces, custom textile tailoring, on-site Islamabad spatial alignment, and white-glove installation.
              </p>

              <div className="space-y-2 mb-6">
                {roomProducts.map((p) => (
                  <div key={p.id} className="flex justify-between text-xs py-1.5 border-b border-[#E2DACF]/60">
                    <span className="text-[#24221F]">{p.name}</span>
                    <span className="font-medium text-[#756557]">{p.priceFormatted}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <button
                id="request-entire-room-suite-btn"
                onClick={onOpenConsultation}
                className="w-full bg-[#24221F] text-[#F5F2EC] text-xs uppercase tracking-[0.18em] py-4 text-center font-medium hover:bg-[#383633] transition-colors"
              >
                Request This Complete Room Suite
              </button>
              <button
                onClick={handleRequestRoomWhatsApp}
                className="w-full border border-[#24221F] text-[#24221F] text-xs uppercase tracking-[0.18em] py-3.5 text-center flex items-center justify-center gap-2 hover:bg-[#24221F] hover:text-[#F5F2EC] transition-colors"
              >
                <MessageSquare size={14} /> Discuss Suite on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
