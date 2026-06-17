import "frida-il2cpp-bridge";

Il2Cpp.perform(() => {
    //ENGINE ASSEMBLIES & IMAGES

    const core = Il2Cpp.domain.assembly("UnityEngine.CoreModule").image;
    const physics = Il2Cpp.domain.assembly("UnityEngine.PhysicsModule").image;
    const game = Il2Cpp.domain.assembly("Assembly-CSharp").image;

    //ENGINE CLASSES
    const GameObject = core.class("UnityEngine.GameObject");
    const Transform = core.class("UnityEngine.Transform");
    const Camera = core.class("UnityEngine.Camera");

    const Rigidbody = physics.class("UnityEngine.Rigidbody");
    const Collider = physics.class("UnityEngine.Collider");

    const Vector3 = core.class("UnityEngine.Vector3");
    const Quaternion = core.class("UnityEngine.Quaternion");
    const Mathf = core.class("UnityEngine.Mathf");
    const XR = core.class("UnityEngine.XR"); //hope thats it
    //ENGINE METHOD BINDINGS
    const find = GameObject.method("Find");
    const findWithTag = GameObject.method("FindGameObjectWithTag");
    const getComponent = GameObject.method("GetComponent");
    const NewGameObjectPrimitive = GameObject.method("CreatePrimitive");
    
    const CreateGameObject = GameObject.method("Internal_CreateGameObject");
    const AddComponent = GameObject.method("AddComponent");
    const get_transform = GameObject.method("get_transform");
    const set_localScale = Transform.method("set_localScale");
});
//kinda shitty im sorry
