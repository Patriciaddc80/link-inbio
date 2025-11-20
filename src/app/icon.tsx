import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default async function Icon() {
  const imagePath = join(process.cwd(), 'public', 'images', 'image-profile.jpg');
  const imageBuffer = await readFile(imagePath);
  const imageBase64 = imageBuffer.toString('base64');
  const imageDataUrl = `data:image/jpeg;base64,${imageBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'white',
        }}
      >
        <img
          src={imageDataUrl}
          alt="Profile"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

