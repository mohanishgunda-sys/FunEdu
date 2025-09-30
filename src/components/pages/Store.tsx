import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { ShoppingCart, Filter, Star, Package, BookOpen, Gamepad2, Palette } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  bestseller?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Math Adventure Course',
    description: 'Complete K-5 mathematics curriculum with interactive exercises',
    price: 49.99,
    category: 'courses',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=400',
    bestseller: true
  },
  {
    id: 2,
    name: 'Science Lab Kit',
    description: '20+ hands-on experiments for curious young scientists',
    price: 79.99,
    category: 'kits',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Reading Comprehension Bundle',
    description: 'Printable worksheets for grades 1-6 with answer keys',
    price: 24.99,
    category: 'worksheets',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/159675/book-address-book-learning-learn-159675.jpeg?auto=compress&cs=tinysrgb&w=400',
    bestseller: true
  },
  {
    id: 4,
    name: 'Creative Art Master Class',
    description: 'Video course teaching drawing, painting, and mixed media',
    price: 39.99,
    category: 'courses',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    name: 'Coding Basics Kit',
    description: 'Learn programming fundamentals through fun games',
    price: 59.99,
    category: 'kits',
    rating: 4.8,
    image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    name: 'Grammar Workbook Set',
    description: '500+ practice exercises with detailed explanations',
    price: 19.99,
    category: 'worksheets',
    rating: 4.6,
    image: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 7,
    name: 'World Geography Explorer',
    description: 'Interactive maps and cultural studies course',
    price: 44.99,
    category: 'courses',
    rating: 4.7,
    image: 'https://images.pexels.com/photos/269633/pexels-photo-269633.jpeg?auto=compress&cs=tinysrgb&w=400',
    bestseller: true
  },
  {
    id: 8,
    name: 'Engineering Building Set',
    description: '100-piece construction kit with project guide',
    price: 69.99,
    category: 'kits',
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 9,
    name: 'Times Tables Practice Pack',
    description: 'Fun multiplication worksheets and flashcards',
    price: 14.99,
    category: 'worksheets',
    rating: 4.5,
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const categories = [
  { id: 'all', label: 'All Products', icon: Package },
  { id: 'courses', label: 'Courses', icon: BookOpen },
  { id: 'worksheets', label: 'Worksheets', icon: Palette },
  { id: 'kits', label: 'Kits', icon: Gamepad2 }
];

const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<number[]>([]);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'linear-gradient(135deg, #FFF5F0 0%, #FFE8DC 100%)' }}>
      <Container>
        <div className="text-center mb-5 fade-in-up">
          <h1 className="display-4 fw-bold mb-3">
            <span style={{ background: 'linear-gradient(135deg, #FF6B6B, #FFB84D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Fun Edu Store
            </span>
          </h1>
          <p className="lead text-muted">Discover educational resources that make learning exciting</p>

          <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
            <ShoppingCart size={24} style={{ color: '#FF6B6B' }} />
            <span className="fw-semibold" style={{ color: '#FF6B6B' }}>
              {cart.length} {cart.length === 1 ? 'item' : 'items'} in cart
            </span>
          </div>
        </div>

        <div className="mb-5">
          <div className="d-flex align-items-center gap-2 mb-3">
            <Filter size={20} style={{ color: '#FF9A8B' }} />
            <h5 className="mb-0 fw-semibold">Filter by Category</h5>
          </div>
          <div className="d-flex gap-3 flex-wrap">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    background: selectedCategory === cat.id
                      ? 'linear-gradient(135deg, #FF9A8B, #FFB84D)'
                      : 'white',
                    color: selectedCategory === cat.id ? 'white' : '#666',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 24px',
                    fontWeight: '600',
                    boxShadow: selectedCategory === cat.id
                      ? '0 8px 20px rgba(255, 107, 107, 0.3)'
                      : '0 4px 10px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  className="d-flex align-items-center gap-2"
                >
                  <Icon size={18} />
                  {cat.label}
                </Button>
              );
            })}
          </div>
        </div>

        <Row className="g-4 mb-5">
          {filteredProducts.map(product => (
            <Col key={product.id} xs={12} sm={6} lg={4}>
              <div
                className="h-100 fade-in-up"
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {product.bestseller && (
                    <Badge
                      bg="warning"
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        padding: '8px 15px',
                        fontSize: '0.8rem',
                        fontWeight: '700'
                      }}
                    >
                      Bestseller
                    </Badge>
                  )}
                </div>

                <div style={{ padding: '20px' }}>
                  <div className="d-flex align-items-center gap-1 mb-2">
                    <Star size={16} fill="#FFD700" color="#FFD700" />
                    <span className="fw-semibold" style={{ color: '#333' }}>{product.rating}</span>
                    <span className="text-muted" style={{ fontSize: '0.9rem' }}>(50+ reviews)</span>
                  </div>

                  <h5 className="fw-bold mb-2" style={{ color: '#333' }}>{product.name}</h5>
                  <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
                    {product.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-4 fw-bold" style={{ color: '#FF6B6B' }}>
                      ${product.price}
                    </span>
                    <Button
                      onClick={() => addToCart(product.id)}
                      style={{
                        background: 'linear-gradient(135deg, #FF9A8B, #FFB84D)',
                        border: 'none',
                        borderRadius: '15px',
                        padding: '10px 20px',
                        fontWeight: '600',
                        boxShadow: '0 5px 15px rgba(255, 107, 107, 0.3)'
                      }}
                      className="d-flex align-items-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Store;