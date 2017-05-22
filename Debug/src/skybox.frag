#version 330 core

in vec3 TexCoords;
out vec4 color;

uniform sampler2D tex1;
uniform sampler2D tex2;

uniform samplerCube skybox;

void main()
{    
    color = texture(skybox, TexCoords);
}