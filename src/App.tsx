/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Home, 
  Tv, 
  Store, 
  Users, 
  Gamepad2, 
  Search, 
  Bell, 
  MessageCircle, 
  Menu,
  Plus,
  Video,
  Image as ImageIcon,
  Smile,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Flag,
  Clock,
  Bookmark,
  Calendar,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

// Mock Data
const STORIES = [
  { id: 1, name: 'Create Story', image: 'https://picsum.photos/seed/user1/200/300', isCreate: true },
  { id: 2, name: 'Sarah Wilson', image: 'https://picsum.photos/seed/story1/200/300', avatar: 'https://picsum.photos/seed/avatar1/50/50' },
  { id: 3, name: 'John Doe', image: 'https://picsum.photos/seed/story2/200/300', avatar: 'https://picsum.photos/seed/avatar2/50/50' },
  { id: 4, name: 'Emma Thompson', image: 'https://picsum.photos/seed/story3/200/300', avatar: 'https://picsum.photos/seed/avatar3/50/50' },
  { id: 5, name: 'Alex Rivers', image: 'https://picsum.photos/seed/story4/200/300', avatar: 'https://picsum.photos/seed/avatar4/50/50' },
];

const POSTS = [
  {
    id: 1,
    author: 'National Geographic',
    avatar: 'https://picsum.photos/seed/natgeo/50/50',
    time: '2h',
    content: 'The beauty of the northern lights captured in Norway last night. Nature never ceases to amaze us. #Nature #Aurora',
    image: 'https://picsum.photos/seed/aurora/800/600',
    likes: 1200,
    comments: 84,
    shares: 12
  },
  {
    id: 2,
    author: 'Tech Insider',
    avatar: 'https://picsum.photos/seed/tech/50/50',
    time: '5h',
    content: 'Check out the new futuristic concept car that just debuted at the auto show! 🚗✨',
    image: 'https://picsum.photos/seed/car/800/600',
    likes: 850,
    comments: 42,
    shares: 5
  },
  {
    id: 3,
    author: 'Cooking Master',
    avatar: 'https://picsum.photos/seed/cook/50/50',
    time: '12h',
    content: 'The secret to the perfect sourdough bread is all in the fermentation time. Who wants the recipe? 🥖',
    image: 'https://picsum.photos/seed/bread/800/600',
    likes: 2300,
    comments: 156,
    shares: 89
  }
];

const CONTACTS = [
  { id: 1, name: 'Sarah Wilson', online: true, avatar: 'https://picsum.photos/seed/avatar1/50/50' },
  { id: 2, name: 'John Doe', online: true, avatar: 'https://picsum.photos/seed/avatar2/50/50' },
  { id: 3, name: 'Emma Thompson', online: false, avatar: 'https://picsum.photos/seed/avatar3/50/50' },
  { id: 4, name: 'Alex Rivers', online: true, avatar: 'https://picsum.photos/seed/avatar4/50/50' },
  { id: 5, name: 'Michael Scott', online: true, avatar: 'https://picsum.photos/seed/office/50/50' },
  { id: 6, name: 'Pam Beesly', online: false, avatar: 'https://picsum.photos/seed/pam/50/50' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-[#1C1E21]">
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between bg-white px-4 shadow-sm">
        {/* Left: Logo & Search */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0866FF]">
            <span className="text-2xl font-bold text-white">f</span>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-[#F0F2F5] px-3 py-2 md:flex">
            <Search className="h-4 w-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search Facebook" 
              className="bg-transparent text-sm outline-none placeholder:text-gray-500"
            />
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F2F5] md:hidden">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Middle: Navigation */}
        <nav className="hidden h-full flex-1 justify-center gap-2 lg:flex">
          {[
            { id: 'home', icon: Home },
            { id: 'video', icon: Tv },
            { id: 'market', icon: Store },
            { id: 'groups', icon: Users },
            { id: 'gaming', icon: Gamepad2 },
          ].map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative flex h-full w-28 items-center justify-center transition-colors hover:bg-gray-100 ${
                activeTab === id ? 'text-[#0866FF]' : 'text-gray-500'
              }`}
            >
              <Icon className="h-7 w-7" />
              {activeTab === id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 h-1 w-full bg-[#0866FF]"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right: Profile & Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full px-2 py-1 hover:bg-gray-100 xl:flex">
            <img src="https://picsum.photos/seed/me/40/40" alt="Me" className="h-7 w-7 rounded-full" referrerPolicy="no-referrer" />
            <span className="text-sm font-semibold">User</span>
          </div>
          <div className="flex gap-2">
            {[Menu, MessageCircle, Bell, ChevronDown].map((Icon, i) => (
              <button key={i} className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E4E6EB] hover:bg-gray-300">
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex justify-between pt-4">
        {/* Left Sidebar */}
        <aside className="hidden w-[360px] flex-col gap-1 overflow-y-auto px-2 pb-4 xl:flex">
          <SidebarItem icon={<img src="https://picsum.photos/seed/me/40/40" className="h-9 w-9 rounded-full" referrerPolicy="no-referrer" />} label="User Name" />
          <SidebarItem icon={<Users className="h-9 w-9 text-[#0866FF]" />} label="Friends" />
          <SidebarItem icon={<Clock className="h-9 w-9 text-[#0866FF]" />} label="Memories" />
          <SidebarItem icon={<Bookmark className="h-9 w-9 text-[#B068E1]" />} label="Saved" />
          <SidebarItem icon={<Users className="h-9 w-9 text-[#0866FF]" />} label="Groups" />
          <SidebarItem icon={<Tv className="h-9 w-9 text-[#0866FF]" />} label="Video" />
          <SidebarItem icon={<Store className="h-9 w-9 text-[#0866FF]" />} label="Marketplace" />
          <SidebarItem icon={<Calendar className="h-9 w-9 text-[#F35369]" />} label="Events" />
          <SidebarItem icon={<Star className="h-9 w-9 text-[#F7B928]" />} label="Favorites" />
          <SidebarItem icon={<ChevronDown className="h-9 w-9 rounded-full bg-gray-200 p-2" />} label="See more" />
          
          <hr className="my-4 border-gray-300" />
          
          <div className="flex items-center justify-between px-2 py-2">
            <span className="font-semibold text-gray-500">Your Shortcuts</span>
            <button className="text-sm text-[#0866FF] hover:bg-gray-200 px-2 py-1 rounded">Edit</button>
          </div>
          <SidebarItem icon={<img src="https://picsum.photos/seed/group1/40/40" className="h-9 w-9 rounded-lg" referrerPolicy="no-referrer" />} label="React Developers" />
          <SidebarItem icon={<img src="https://picsum.photos/seed/group2/40/40" className="h-9 w-9 rounded-lg" referrerPolicy="no-referrer" />} label="UI/UX Design Community" />
        </aside>

        {/* Feed */}
        <section className="mx-auto flex w-full max-w-[680px] flex-col gap-4 px-4 pb-10">
          {/* Stories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {STORIES.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          {/* Create Post */}
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="flex gap-2 border-b border-gray-200 pb-3">
              <img src="https://picsum.photos/seed/me/40/40" alt="Me" className="h-10 w-10 rounded-full" referrerPolicy="no-referrer" />
              <button className="flex-1 rounded-full bg-[#F0F2F5] px-4 text-left text-gray-500 hover:bg-gray-200">
                What's on your mind, User?
              </button>
            </div>
            <div className="flex justify-between pt-2">
              <PostAction icon={<Video className="text-[#F3425F]" />} label="Live video" />
              <PostAction icon={<ImageIcon className="text-[#45BD62]" />} label="Photo/video" />
              <PostAction icon={<Smile className="text-[#F7B928]" />} label="Feeling/activity" />
            </div>
          </div>

          {/* Posts */}
          <AnimatePresence>
            {POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </AnimatePresence>
        </section>

        {/* Right Sidebar */}
        <aside className="hidden w-[360px] flex-col gap-2 overflow-y-auto px-4 xl:flex">
          <div className="flex items-center justify-between py-2">
            <span className="font-semibold text-gray-500">Sponsored</span>
          </div>
          <SponsoredItem 
            image="https://picsum.photos/seed/ad1/150/150" 
            title="Master React in 30 Days" 
            link="react-course.com" 
          />
          <SponsoredItem 
            image="https://picsum.photos/seed/ad2/150/150" 
            title="Build Your Dream Home" 
            link="luxury-homes.net" 
          />

          <hr className="my-4 border-gray-300" />

          <div className="flex items-center justify-between py-2">
            <span className="font-semibold text-gray-500">Contacts</span>
            <div className="flex gap-4 text-gray-500">
              <Video className="h-4 w-4 cursor-pointer" />
              <Search className="h-4 w-4 cursor-pointer" />
              <MoreHorizontal className="h-4 w-4 cursor-pointer" />
            </div>
          </div>
          {CONTACTS.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </aside>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-200">
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function StoryCard(props: any) {
  const { story } = props;
  return (
    <div className="relative h-48 w-28 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow-sm transition-transform hover:scale-[1.02]">
      <img 
        src={story.image} 
        alt={story.name} 
        className={`h-full w-full object-cover ${story.isCreate ? 'h-[80%]' : ''}`} 
        referrerPolicy="no-referrer"
      />
      {story.isCreate ? (
        <div className="absolute bottom-0 flex h-[20%] w-full flex-col items-center bg-white pt-4">
          <div className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-[#0866FF]">
            <Plus className="h-5 w-5 text-white" />
          </div>
          <span className="text-[11px] font-semibold">Create story</span>
        </div>
      ) : (
        <>
          <div className="absolute left-2 top-2 h-10 w-10 rounded-full border-4 border-[#0866FF] p-0.5">
            <img src={story.avatar} alt={story.name} className="h-full w-full rounded-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute bottom-2 left-2 right-2">
            <span className="text-[12px] font-semibold text-white drop-shadow-md">{story.name}</span>
          </div>
          <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors" />
        </>
      )}
    </div>
  );
}

function PostAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg py-2 transition-colors hover:bg-gray-100">
      {icon}
      <span className="text-sm font-semibold text-gray-500">{label}</span>
    </button>
  );
}

function PostCard(props: any) {
  const { post } = props;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg bg-white shadow-sm"
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-3">
          <img src={post.avatar} alt={post.author} className="h-10 w-10 rounded-full" referrerPolicy="no-referrer" />
          <div>
            <h3 className="text-sm font-semibold hover:underline cursor-pointer">{post.author}</h3>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <span>{post.time}</span>
              <span>•</span>
              <Users className="h-3 w-3" />
            </div>
          </div>
        </div>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="px-4 pb-3">
        <p className="text-sm">{post.content}</p>
      </div>

      {post.image && (
        <img src={post.image} alt="Post content" className="w-full object-cover" referrerPolicy="no-referrer" />
      )}

      <div className="px-4 py-2">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0866FF]">
              <ThumbsUp className="h-3 w-3 text-white fill-white" />
            </div>
            <span>{post.likes}</span>
          </div>
          <div className="flex gap-3">
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>

        <div className="flex justify-between pt-1">
          <PostInteraction icon={<ThumbsUp className="h-5 w-5" />} label="Like" />
          <PostInteraction icon={<MessageSquare className="h-5 w-5" />} label="Comment" />
          <PostInteraction icon={<Share2 className="h-5 w-5" />} label="Share" />
        </div>
      </div>
    </motion.div>
  );
}

function PostInteraction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg py-2 transition-colors hover:bg-gray-100 text-gray-500">
      {icon}
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function SponsoredItem({ image, title, link }: { image: string; title: string; link: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-200 cursor-pointer">
      <img src={image} alt={title} className="h-28 w-28 rounded-lg object-cover" referrerPolicy="no-referrer" />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold line-clamp-2">{title}</span>
        <span className="text-xs text-gray-500">{link}</span>
      </div>
    </div>
  );
}

function ContactItem(props: any) {
  const { contact } = props;
  return (
    <button className="relative flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-200 w-full">
      <div className="relative">
        <img src={contact.avatar} alt={contact.name} className="h-9 w-9 rounded-full" referrerPolicy="no-referrer" />
        {contact.online && (
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
        )}
      </div>
      <span className="text-sm font-semibold">{contact.name}</span>
    </button>
  );
}
