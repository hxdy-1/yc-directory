import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query: string }>;
}) {
	const query = (await searchParams).query;
	const searchValue = query ? `${query}*` : null;
	const params = { search: searchValue };
	const { data: posts } = await sanityFetch({
		query: STARTUPS_QUERY,
		params,
	});

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
			</section>
			<section className="section_container">
				<p className="text-30-semibold">
					{query
						? `${posts?.length} Search results for "${query}"`
						: `All Startups (${posts?.length})`}
				</p>

				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType) => (
							<StartupCard key={post?._id} post={post} />
						))
					) : (
						<p className="no-results">No startups found</p>
					)}
				</ul>
			</section>
			<SanityLive />
		</>
	);
}
