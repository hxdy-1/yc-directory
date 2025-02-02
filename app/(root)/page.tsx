import SearchForm from "@/components/SearchForm";
import Animate from "@/components/Animate";
import StartupCard from "@/components/StartupCard";
import DownArrow from "@/components/DownArrow";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query: string }>;
}) {
	const query = (await searchParams).query;

	const posts = [
		{
			_createdAt: "01-02-2025",
			views: 22,
			author: {
				image: "https://avatars.githubusercontent.com/u/115286446?v=4",
				name: "Hady",
			},
			_id: 1,
			description: "Cool description",
			image: "https://thumbs.dreamstime.com/b/robot-painting-landscape-futuristic-digital-art-scene-vibrant-natural-setting-sits-scenic-view-mountains-340179680.jpg",
			category: "Robots",
			title: "We Ball",
		},
		{
			_createdAt: "01-02-2025",
			views: 22,
			author: {
				image: "https://avatars.githubusercontent.com/u/115286446?v=4",
				name: "Hady",
			},
			_id: 2,
			description: "Cool description",
			image: "https://thumbs.dreamstime.com/b/robot-painting-landscape-futuristic-digital-art-scene-vibrant-natural-setting-sits-scenic-view-mountains-340179680.jpg",
			category: "Robots",
			title: "We Ball",
		},
		{
			_createdAt: "01-02-2025",
			views: 22,
			author: {
				image: "https://avatars.githubusercontent.com/u/115286446?v=4",
				name: "Hady",
			},
			_id: 3,
			description: "Cool description",
			image: "https://thumbs.dreamstime.com/b/robot-painting-landscape-futuristic-digital-art-scene-vibrant-natural-setting-sits-scenic-view-mountains-340179680.jpg",
			category: "Robots",
			title: "We Ball",
		},
		{
			_createdAt: "01-02-2025",
			views: 22,
			author: {
				image: "https://avatars.githubusercontent.com/u/115286446?v=4",
				name: "Hady",
			},
			_id: 4,
			description: "Cool description",
			image: "https://thumbs.dreamstime.com/b/robot-painting-landscape-futuristic-digital-art-scene-vibrant-natural-setting-sits-scenic-view-mountains-340179680.jpg",
			category: "Robots",
			title: "We Ball",
		},
	];

	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Pitch your start up <br /> connect with entrepreneurs
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submit ideas, Vote on Pitches and Get Noticed in a virtual
					competition
				</p>
				<SearchForm query={query} />
				<DownArrow />
			</section>
			<section className="section_container">
				<Animate>
					<p className="text-30-semibold">
						{query
							? `Search results for "${query}"`
							: "All Startups"}
					</p>
				</Animate>

				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post) => (
							<StartupCard key={post?._id} post={post} />
						))
					) : (
						<p className="no-results">No startups found</p>
					)}
				</ul>
			</section>
		</>
	);
}
