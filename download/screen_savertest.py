import pygame
from random import randrange
from time import sleep
pygame.init()
WSIZE = (0, 0)
screen = pygame.display.set_mode(WSIZE)
W, H = screen.get_size()
print(W, H)
clock = pygame.time.Clock()


loop = 1
while loop:
    sleep1 = (randrange(1, 10))
    sleep2 = (sleep1 / 2)
    sleep(sleep2)
    c1 = (randrange(0, 255))
    c2 = (randrange(0, 255))
    c3 = (randrange(0, 255))
 # Initialing RGB Color 
    color = (c1,c2, c3)

    surface = pygame.display.set_mode((WSIZE))
# Changing surface color
    surface.fill(color)
    pygame.display.flip()
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            loop = 0
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                loop = 0
 
    pygame.display.update()
    clock.tick(60)
 
pygame.quit()
