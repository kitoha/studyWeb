package com.toyproject.algostudy.domain;

import com.toyproject.algostudy.domain.user.User;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ManyToManyTest {
    @Autowired
    private EntityManagerFactory entityManagerFactory;

    private EntityManager entityManager;

    @Test
    public void manyTomanyTest(){
        User user=User.builder()
                .email("123")
                .name("123")
                .password("123")
                .build();

        UserGroup userGroup=UserGroup.builder()
                .title("테스트")
                .content("테스트하자")
                .reader("123")
                .build();

        user.getGroups().add(userGroup);
        userGroup.getUsers().add(user);

        entityManager.persist(user);

       // assertThat(user.getId()).isEqualTo(userGroup.getUsers().)  Set 테스트는 어떻게할까?

    }

    @Before
    public void setUp() throws Exception {
        entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
    }

    @After
    public void after() {
        entityManager.getTransaction().commit();
        entityManager.close();
    }
}
