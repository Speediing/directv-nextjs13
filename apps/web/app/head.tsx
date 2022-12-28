export default function Head() {
  return (
    <>
      <title>Directv</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* @ts-expect-error Server Component */}
      <link precedence="default" rel="shortcut icon" href="/favicon.ico" />
    </>
  );
}
