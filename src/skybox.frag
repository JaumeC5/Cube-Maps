#version 330 core

in vec3 TexCoords;
out vec4 color;

uniform samplerCube skybox;
//uniform samplerCube skybox2;

void main()
{    
    color = texture(skybox, TexCoords);

	//color = mix(texture(skybox, TexCoords), texture(skybox2, TexCoords), alternador);
}