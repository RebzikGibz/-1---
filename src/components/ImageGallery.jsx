export default function ImageGallery() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <img src="https://picsum.photos/id/1015/200/150" alt="Горный пейзаж" width="200" height="150" />
      <img src="https://picsum.photos/id/1025/200/150" alt="Собака мопс" width="200" height="150" />
      <img src="https://picsum.photos/id/1039/200/150" alt="Водопад" width="200" height="150" />
    </div>
  );
}