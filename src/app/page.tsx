
export default function HomePage() {
  const mockUrl = [
    "https://nh0gg4nubi.ufs.sh/f/AnYC1Nw7ODiVLBZ9xOj3vIKHCEMNUV5Dojx6p2ZW0PL8GmcX",
    "https://nh0gg4nubi.ufs.sh/f/AnYC1Nw7ODiVNbcyZsR1KiC3yxS02pW8rVGozPgwcmAEqvbH",
    "https://nh0gg4nubi.ufs.sh/f/AnYC1Nw7ODiVb5cjAkZM1oPQjCykm5lh0vXZ9BHOuU7iTKq4",
  ];

  const mockImage = mockUrl.map((url, index) => (
    {
      id: index + 1,
      url
    }
  ))
  return (
    <main className="">
      <div className="container flex flex-wrap gap-4">
        {[
          ...mockImage,
          ...mockImage,
          ...mockImage,
          ...mockImage,
          ...mockImage,
        ].map((image) => (
          <div key={image.id} className="flex w-48  ">
            <img className="w-full" src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
