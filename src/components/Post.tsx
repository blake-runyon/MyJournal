import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { PostService } from '../services/PostService';
import moment from 'moment';

export const Posts = () => {
    const pService = new PostService();
    const [post, setPost] = React.useState<any[]>([]);

    useEffect(() => {
      pService.GetPosts().then(data => {
        setPost(data);
      })
    }, [])

    return (
      <>
        <Container>
          <Row>
            { post.map((p: any) => {
              return (
                <>
                <Col xs="12" md="6">
                  <Card className='m-1'>
                    <Card.Body>
                      <Card.Title>
                        <h3 style={{color: "#70c00f"}}>{p.title}</h3>
                      </Card.Title>
                      <Card.Subtitle>
                        <sup>{moment(p.createdAt).format('M/D/yyyy')}</sup>
                      </Card.Subtitle>
                      <Card.Text>
                        <p>{p.content}</p>
                        <a href={`/post/${p._id}`}>Read More</a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                </>
              )
            }) }
          </Row>
        </Container>
      </>
    );
}